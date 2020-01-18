package ASDE2019.unical.it.medicalcenterservice.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id_user")
	private int idUser;

	@Column(columnDefinition = "mediumblob")
	private byte[] image;

	@Column(unique = true)
	private String email;

	private String name;

	private String surname;

	private String password;

	private String biography;
	
	private boolean doctor;

//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY)
//	private List<Report> reports;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(byte[] image, String email, String name, String surname, String password, String biography, boolean doctor) {
		super();
		this.image = image;
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.biography = biography;
		this.doctor = doctor;
	}

	public boolean getDoctor() {
		return doctor;
	}

	public String getEmail() {
		return email;
	}

	public int getIdUser() {
		return idUser;
	}

	public byte[] getImage() {
		return image;
	}


	public String getName() {
		return name;
	}

	public String getPassword() {
		return password;
	}


//	public List<Report> getReports() {
//		return reports;
//	}

	public String getSurname() {
		return surname;
	}

	public void setDoctor(boolean doctor) {
		this.doctor = doctor;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

//	public void setReports(List<Report> reports) {
//		this.reports = reports;
//	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	@Override
	public String toString() {
		return "Utente [id=" + idUser + " name=" + name + ", surname=" + surname + ", password=" + password +
				", email=" + email + ", doctor=" + doctor +", image=" + image +"]";
	}
}
