package ASDE2019.unical.it.medicalcenterservice.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Patient {

	@Id
	private String email;
	
	private String name;
	
	private String surname;
	
	private String password;
	
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

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
}
