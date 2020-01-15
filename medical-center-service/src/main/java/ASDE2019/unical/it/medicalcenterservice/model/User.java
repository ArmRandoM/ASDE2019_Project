package ASDE2019.unical.it.medicalcenterservice.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idUser;
	
	@Column(columnDefinition = "blob")
	private byte[] image;
	
	private String email;

	private String name;

	private String surname;

	private String password;
	
	private boolean doctor;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.EAGER)
	private List<Report> reports;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(byte[] image, String email, String name, String surname, String password, boolean doctor, List<Report> reports) {
		super();
		this.image = image;
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.doctor = doctor;
		this.reports = reports;
	}

	public List<Report> getReports() {
		return reports;
	}

	public void setReports(List<Report> reports) {
		this.reports = reports;
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}


	@Override
	public String toString() {
		return "Utente [name=" + name + ", surname=" + surname + ", password=" + password +
				", email=" + email + ", doctor=" + doctor +", image=" + image +"]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean getDoctor() {
		return doctor;
	}

	public void setDoctor(boolean doctor) {
		this.doctor = doctor;
	}
}
