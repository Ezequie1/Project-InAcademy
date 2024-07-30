package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import project.in_academy.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String login);

    @Query("SELECT u FROM User u ORDER BY u.userPoints DESC")
    Optional<List<User>> findTopSevenUsers();
}
