package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.in_academy.model.Class;

@Repository
public interface ClassRepository extends JpaRepository<Class, String> {
}
