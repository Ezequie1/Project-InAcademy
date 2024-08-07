package project.in_academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.in_academy.dto.OfficeRequestDTO;
import project.in_academy.dto.UsersRankingResponse;
import project.in_academy.infra.cors.model.User;
import project.in_academy.service.UserService;

import java.util.List;

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

    @PutMapping("/office")
    public ResponseEntity<User> changeOffice(@RequestBody OfficeRequestDTO newOffice, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok().body(service.changeOffice(newOffice.office(), token));
    }

    @GetMapping("/ranking")
    public ResponseEntity<List<UsersRankingResponse>> getRanking() {
        return ResponseEntity.ok().body(service.getRanking());
    }

    @GetMapping("/online/true")
    public void setStatusOnlineTrue(@RequestHeader("Authorization") String token) {
        service.setStatus(true, token);
    }

    @GetMapping("/online/false")
    public void setStatusOnlineFalse(@RequestHeader("Authorization") String token) {
        service.setStatus(false, token);
    }
}
