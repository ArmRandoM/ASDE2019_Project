package ASDE2019.unical.it.medicalcenterservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode
@Table(name="Userprofile")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //user's id
    private Long Id;

    @NotNull
    @Size(max = 300)
    //information about user
    private String about;

    @NotNull
    @Size(max =200)
    //profile's picture URL
    private String profilePictureURL;

    @NotNull
    //user's gender
    private boolean gender;

    @NotNull
    @Size(max = 50)
    //user's country
    private String country;
    
    @NotNull
    @Size(max = 50)
    //user's city
    private String city;

    @NotNull
    @Size(max = 100 )
    //user's language
    private String languages;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "patient_id", nullable = false)
    //link between patient and his profile
    private Patient patient;
}
