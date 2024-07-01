package project.in_academy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userId;
    @NotNull
    private String name;
    @NotNull
    @Column(unique = true)
    private String email;
    private String office;
    @NotNull
    @JsonIgnore
    private String password;
    private Boolean isOnline;
    private int userPoints;
    private String urlImageUser;
    @OneToMany(mappedBy = "userId")
    private List<Enrollments> courses;
    @OneToMany(mappedBy = "userId")
    private List<Favorites> favoritesCourses;
    @OneToMany(mappedBy = "userId")
    private List<Comments> comments;
    @OneToMany(mappedBy = "userId")
    private List<ClassProgress> progressClass;
}
