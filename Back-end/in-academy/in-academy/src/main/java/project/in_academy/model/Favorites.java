package project.in_academy.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorites {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String favoriteId;
    @ManyToOne
    @JoinColumn(name = "favoritesCourses")
    private Course courseId;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User userId;
}
