package project.in_academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.in_academy.dto.EnrollmentRequestDTO;
import project.in_academy.infra.cors.model.Course;
import project.in_academy.infra.cors.model.Enrollments;
import project.in_academy.service.EnrollmentsService;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentsController {

    @Autowired
    private EnrollmentsService service;

    @GetMapping
    private ResponseEntity<List<Enrollments>> getAllEnrollments(){
        return ResponseEntity.ok().body(service.getAllEnrollments());
    }

    @GetMapping("/courses")
    private ResponseEntity<List<Course>> getAllCoursesEnrollments(@RequestHeader("Authorization") String token){
        return ResponseEntity.ok().body(service.enrollmentsCourses(token));
    }

    @PostMapping("/subscribe")
    private ResponseEntity<Enrollments> subscribeInCourse(@RequestBody EnrollmentRequestDTO newEnrollment){
        return ResponseEntity.status(201).body(service.subscribe(newEnrollment));
    }
}
