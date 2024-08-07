package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.in_academy.infra.cors.model.Comments;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, String> {
}
