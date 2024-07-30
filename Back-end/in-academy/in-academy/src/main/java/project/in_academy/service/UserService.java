package project.in_academy.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import project.in_academy.dto.OfficeRequestDTO;
import project.in_academy.dto.UsersRankingResponse;
import project.in_academy.model.User;
import project.in_academy.repository.UserRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final AmazonS3 amazonS3;

    @Autowired
    UserRepository repository;

    @Autowired
    TokenService tokenService;

    public UserService(AmazonS3 amazonS3){
        this.amazonS3 = amazonS3;
    }

    @Value("${cloud.aws.s3.bucket.name}")
    private String bucketName;

    public User findUserByEmail(String email){
        return repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
    }

    public String changeUserImage(MultipartFile file, String token) {
        String email = tokenService.getSubject(token.replace("Bearer ", ""));
        User user = repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        String fileName = "users/" + user.getUserId() + "/image/userImage.jpeg";

        try {
            if(user.getUrlImageUser() != null) amazonS3.deleteObject(bucketName, fileName);

            amazonS3.putObject(new PutObjectRequest(bucketName, fileName, file.getInputStream(), null));
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file", e);
        }

        String urlImage = amazonS3.getUrl(bucketName, fileName).toString();

        user.setUrlImageUser(urlImage);
        repository.save(user);

        return urlImage;
    }

    public User changeOffice(String office, String token) {
        String email = tokenService.getSubject(token.replace("Bearer ", ""));
        User user = repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        user.setOffice(office);

        return repository.save(user);
    }

    public List<UsersRankingResponse> getRanking() {
        List<User> users = repository.findTopSevenUsers().orElseThrow(() -> new RuntimeException("Não foram encontrados usuários!")).stream().limit(7).toList();
        List<UsersRankingResponse> responseUsers = new ArrayList<>();

        users.forEach( user ->
            responseUsers.add(
                new UsersRankingResponse(
                        user.getUserId(),
                        user.getName(),
                        user.getUserPoints(),
                        user.getUrlImageUser(),
                        user.getIsOnline()
                )
            )
        );

        return responseUsers;
    }

    public void setStatus(boolean status, String token){
        String email = tokenService.getSubject(token.replace("Bearer ", ""));
        User user = repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        user.setIsOnline(status);

        repository.save(user);
    }
}
