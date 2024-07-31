package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import project.in_academy.model.Course;
import project.in_academy.model.enums.Categories;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {

    @Query("SELECT c FROM Course c ORDER BY c.creationDate DESC")
    Optional<List<Course>> findRecentlyAddedCourses();

    Optional<List<Course>> findByCategory(Categories category);

    List<Course> findByTitleContaining(String query);
}
