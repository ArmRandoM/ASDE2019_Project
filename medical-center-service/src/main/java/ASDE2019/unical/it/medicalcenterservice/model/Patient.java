package ASDE2019.unical.it.medicalcenterservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@EqualsAndHashCode
@NoArgsConstructor
@Table(name = "Patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@NotNull
	private String email;
	
	@NotNull
	private String name;
	
	@NotNull
	private String surname;

	private String password;
	
	@OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "user")
    @JsonManagedReference
    @JsonIgnore
    //link between patient and his profile
    private UserProfile userProfile;

	public Patient(String name, String surname, String password, String email) {
		super();
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.email = email;
	}

	@Override
	public String toString() {
		return "Utente [name=" + name + ", surname=" + surname + ", password=" + password + ", email=" + email + "]";
	}

}
