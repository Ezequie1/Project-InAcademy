package project.in_academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.in_academy.dto.LoginRequestDTO;
import project.in_academy.dto.RegisterRequestDTO;
import project.in_academy.dto.TokenResponseDTO;
import project.in_academy.service.AuthenticationService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationService service;

    @PostMapping("/login")
    public ResponseEntity<TokenResponseDTO> login(@RequestBody LoginRequestDTO request){
        return service.login(request);
    }

    @PostMapping("/register")
    public ResponseEntity<TokenResponseDTO> register(@RequestBody RegisterRequestDTO request){
        return service.register(request);
    }

    @GetMapping("/isAuthenticated")
    public ResponseEntity<String> isAuthenticated(){
        return ResponseEntity.ok().body("OK");
    }
}
