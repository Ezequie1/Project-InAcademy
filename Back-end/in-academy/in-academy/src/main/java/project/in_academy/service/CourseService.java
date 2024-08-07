package project.in_academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.in_academy.infra.cors.model.Course;
import project.in_academy.infra.cors.model.enums.Categories;
import project.in_academy.repository.CourseRepository;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository repository;

    public Course getCourseById(String id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Nenhum curso encontrado com este id"));
    }

    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    public List<Course> getRecentlyAddedCourses() {
        return repository.findRecentlyAddedCourses()
                .orElseThrow(() -> new RuntimeException("Nenhum curso adicionado recentemente"))
                .stream().limit(10).toList();
    }

    public List<Course> getCourseByCategory(String category) {
        return repository.findByCategory(Categories.valueOf(category)).orElseThrow(() -> new RuntimeException("Nenhum curso encontrado com esta categoria!"));
    }

    public List<Course> searchCourses(String query) {
        return repository.findByTitleContaining(query).stream().limit(5).toList();
    }
}
