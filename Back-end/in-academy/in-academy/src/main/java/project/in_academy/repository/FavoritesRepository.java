package project.in_academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.in_academy.infra.cors.model.Course;
import project.in_academy.infra.cors.model.Favorites;
import project.in_academy.infra.cors.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorites, String> {
    List<Favorites> findByUserId(User user);

    Optional<Favorites> findByUserIdAndCourseId(User user, Course course);
}
