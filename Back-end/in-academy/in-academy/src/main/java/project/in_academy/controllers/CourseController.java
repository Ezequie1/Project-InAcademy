package project.in_academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.in_academy.infra.cors.model.Course;
import project.in_academy.service.CourseService;

import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return ResponseEntity.ok().body(service.getAllCourses());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id){
        return ResponseEntity.ok().body(service.getCourseById(id));
    }

    @GetMapping("/search/{query}")
    public ResponseEntity<List<Course>> searchCourses(@PathVariable String query){
        return ResponseEntity.ok().body(service.searchCourses(query));
    }

    @GetMapping("/recently")
    public ResponseEntity<List<Course>> getRecentlyAddedCourses(){
        return ResponseEntity.ok().body(service.getRecentlyAddedCourses());
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Course>> getCourseByCategory(@PathVariable String category){
        return ResponseEntity.ok().body(service.getCourseByCategory(category.toUpperCase()));
    }
}
