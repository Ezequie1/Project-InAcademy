package project.in_academy.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.in_academy.dto.LoginRequestDTO;
import project.in_academy.dto.RegisterRequestDTO;
import project.in_academy.dto.TokenResponseDTO;
import project.in_academy.model.User;
import project.in_academy.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final TokenService tokenService;
    private final PasswordEncoder passwordEncoder;

    public ResponseEntity<TokenResponseDTO> login(LoginRequestDTO request) {
        User user = repository.findByEmail(request.email()).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        if(passwordEncoder.matches(request.password(), user.getPassword())){
            String token = tokenService.generateToken(user);
            return ResponseEntity.ok().body( new TokenResponseDTO(token));
        }

        return ResponseEntity.badRequest().build();
    }

    public ResponseEntity<TokenResponseDTO> register(RegisterRequestDTO request) {
        Optional<User> user = repository.findByEmail(request.email());

        if(user.isEmpty()){
            User newUser = new User(
                    request.name(),
                    request.email(),
                    passwordEncoder.encode(request.password())
            );

            repository.save(newUser);
            String token = tokenService.generateToken(newUser);
            return ResponseEntity.ok().body( new TokenResponseDTO(token));
        }

        return ResponseEntity.badRequest().build();
    }

    public ResponseEntity<User> getContext(String token) {
        String email = tokenService.getSubject(token.replace("Bearer ", ""));

        return ResponseEntity.ok().body(
                repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"))
        );
    }
}
