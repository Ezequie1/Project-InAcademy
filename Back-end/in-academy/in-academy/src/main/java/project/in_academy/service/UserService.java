package project.in_academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.in_academy.model.User;
import project.in_academy.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User findUserByEmail(String email){
        return repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
    }
}
