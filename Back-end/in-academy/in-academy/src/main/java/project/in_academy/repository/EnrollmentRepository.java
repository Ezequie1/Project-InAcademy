package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.in_academy.model.Enrollments;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollments, String> {
}
