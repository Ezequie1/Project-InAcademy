package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.in_academy.infra.cors.model.Enrollments;
import project.in_academy.infra.cors.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollments, String> {
    Optional<List<Enrollments>> findByUserId(User user);
}
