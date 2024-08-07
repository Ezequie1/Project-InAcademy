package project.in_academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.in_academy.infra.cors.model.Course;
import project.in_academy.infra.cors.model.Favorites;
import project.in_academy.infra.cors.model.User;
import project.in_academy.repository.CourseRepository;
import project.in_academy.repository.FavoritesRepository;
import project.in_academy.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FavoritesService {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FavoritesRepository repository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllFavoritesCourses(String token){
        User user = userRepository.findByEmail(getEmailInToken(token)).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
        List<Favorites> favorites = repository.findByUserId(user);
        List<Course> courses = new ArrayList<>();

        favorites.forEach( fav -> courses.add(courseRepository.findById(fav.getCourseId().getCourseId()).orElseThrow(() -> new RuntimeException("Nenhum item encontrado!"))));

        return courses;
    }

    public Favorites addCourseToFavorite(String token, String courseId) {
        User user = userRepository.findByEmail(getEmailInToken(token)).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Curso não encontrado!"));

        return repository.save( new Favorites(course, user));
    }

    public List<Course> removeCourseFavorite(String token, String courseId) {
        User user = userRepository.findByEmail(getEmailInToken(token)).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Curso não encontrado!"));

        Optional<Favorites> favorite = repository.findByUserIdAndCourseId(user, course);

        favorite.ifPresent( fav -> repository.delete(fav));

        return getAllFavoritesCourses(token);
    }

    private String getEmailInToken(String token){
        return tokenService.getSubject(token.replace("Bearer ", ""));
    }
}
