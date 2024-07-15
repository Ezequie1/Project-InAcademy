package project.in_academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.in_academy.model.User;
import project.in_academy.service.UserService;

import java.io.IOException;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email){
        return ResponseEntity.ok().body(service.findUserByEmail(email));
    }

    @PostMapping("/image")
    public ResponseEntity<String> changeUserImage(@RequestParam(value = "file") MultipartFile file, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok().body(service.changeUserImage(file, token));
    }
}
