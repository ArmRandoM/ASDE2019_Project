package ASDE2019.unical.it.medicalcenterservice.dto;

import java.util.List;

import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;

public class UserDTO {

	private int idUser;

	private String image;

	private String email;

	private String name;

	private String surname;
	private String password;

	private boolean doctor;

	private List<Report> reports;

	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDTO(String image, String email, String name, String surname, String password, boolean doctor, List<Report> reports) {
		super();
		this.image = image;
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.doctor = doctor;
		this.reports = reports;
	}

	public void convertUserEntityToBean(User user) {
		this.idUser = user.getIdUser();
		this.image = user.getImage();
		this.email = user.getEmail();
		this.name = user.getName();
		this.surname = user.getSurname();
		this.password = user.getPassword();
		this.doctor = user.getDoctor();
//		this.reports = user.getReports();
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


	public String getImage() {
		return image;
	}

	public String getName() {
		return name;
	}


	public String getPassword() {
		return password;
	}

	public List<Report> getReports() {
		return reports;
	}

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

	public void setImage(String image) {
		this.image = image;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setReports(List<Report> reports) {
		this.reports = reports;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	@Override
	public String toString() {
		return "Utente [name=" + name + ", surname=" + surname + ", password=" + password +
				", email=" + email + ", doctor=" + doctor +", image=" + image +"]";
	}

}
