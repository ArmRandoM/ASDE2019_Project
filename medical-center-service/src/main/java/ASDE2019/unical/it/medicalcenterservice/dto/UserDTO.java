package ASDE2019.unical.it.medicalcenterservice.dto;

import java.util.List;
import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;

public class UserDTO {

	private int idUser;
	
	private byte[] image;
	
	private String email;

	private String name;

	private String surname;
	private String password;

	private String biography;
	
	private boolean doctor;

	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDTO(byte[] image, String email, String name, String surname, String password, String biography, boolean doctor) {
		super();
		this.image = image;
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.biography = biography;
		this.doctor = doctor;
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
		return "Utente [name=" + name + ", surname=" + surname + ", biography="+ biography + ", password=" + password +
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
	
	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
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
	
	public void convertUserEntityToBean(User user) {
		this.idUser = user.getIdUser();
		this.image = user.getImage();
		this.email = user.getEmail();
		this.name = user.getName();
		this.surname = user.getSurname();
		this.password = user.getPassword();
		this.doctor = user.getDoctor();
	}
	
}
