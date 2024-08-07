package project.in_academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.in_academy.infra.cors.model.Course;
import project.in_academy.infra.cors.model.Favorites;
import project.in_academy.service.FavoritesService;

import java.util.List;

@RestController
@RequestMapping("/favorites")
public class FavoritesController {

    @Autowired
    private FavoritesService service;

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getFavoritesCourses(@RequestHeader("Authorization") String token){
        return ResponseEntity.ok().body(service.getAllFavoritesCourses(token));
    }

    @PostMapping("/add/{courseId}")
    public ResponseEntity<Favorites> favoriteCourse(@RequestHeader("Authorization") String token, @PathVariable String courseId){
        return ResponseEntity.status(201).body(service.addCourseToFavorite(token, courseId));
    }

    @PutMapping("/remove/{courseId}")
    public ResponseEntity<List<Course>> removeCourseFavorite(@RequestHeader("Authorization") String token, @PathVariable String courseId){
        return ResponseEntity.ok().body(service.removeCourseFavorite(token, courseId));
    }
}
