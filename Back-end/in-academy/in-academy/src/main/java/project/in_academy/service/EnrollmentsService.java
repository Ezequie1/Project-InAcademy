package project.in_academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.in_academy.dto.EnrollmentRequestDTO;
import project.in_academy.model.Course;
import project.in_academy.model.Enrollments;
import project.in_academy.model.User;
import project.in_academy.model.enums.Progress;
import project.in_academy.repository.CourseRepository;
import project.in_academy.repository.EnrollmentRepository;
import project.in_academy.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnrollmentsService {
    @Autowired
    private EnrollmentRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private TokenService tokenService;

    public List<Enrollments> getAllEnrollments() {
        return repository.findAll();
    }

    public Enrollments subscribe(EnrollmentRequestDTO newEnrollment) {
        User user = userRepository.findByEmail(newEnrollment.email()).orElseThrow(() -> new RuntimeException("Usuário não encontrado com este ID"));
        Course course = courseRepository.findById(newEnrollment.courseId()).orElseThrow(() -> new RuntimeException("Curso não encontrado com este ID"));

        course.setTotalUsersEnrollmenteds(course.getEnrolledStudents().size() + 1);
        courseRepository.save(course);

        return repository.save(
                new Enrollments(
                        user,
                        course,
                        Progress.NOT_STARTED
                )
        );
    }

    public List<Course> enrollmentsCourses(String token) {
        User user = userRepository.findByEmail(tokenService.getSubject(token.replace("Bearer ", ""))).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
        List<Enrollments> enrollments = repository.findByUserId(user).orElseThrow();
        List<Course> courses = new ArrayList<>();

        enrollments.forEach( enrollment ->
            courses.add(
                    courseRepository.findById(enrollment.getCourseId().getCourseId()).orElseThrow()
            )
        );

        return courses;
    }
}
