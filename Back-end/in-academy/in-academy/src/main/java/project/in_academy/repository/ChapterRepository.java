package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.in_academy.model.Chapter;

@Repository
public interface ChapterRepository extends JpaRepository<Chapter, String> {
}
