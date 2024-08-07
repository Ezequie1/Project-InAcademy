package project.in_academy.infra.cors.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {

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
    @JsonBackReference
    private List<Enrollments> courses;
    @OneToMany(mappedBy = "userId")
    @JsonBackReference
    private List<Favorites> favoritesCourses;
    @OneToMany(mappedBy = "userId")
    private List<Comments> comments;
    @OneToMany(mappedBy = "userId")
    private List<ClassProgress> progressClass;

    public User(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.office = null;
        this.password = password;
        this.isOnline = false;
        this.userPoints = 0;
        this.urlImageUser = null;
        this.courses = new ArrayList<>();
        this.favoritesCourses = new ArrayList<>();
        this.comments = new ArrayList<>();
        this.progressClass = new ArrayList<>();
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"));
    }

    @JsonIgnore
    @Override
    public String getUsername() {
        return email;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true;
    }
}
