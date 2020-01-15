package ASDE2019.unical.it.medicalcenterservice.controllers;

import javax.mail.Session;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.services.EmailService;
import ASDE2019.unical.it.medicalcenterservice.services.LoginService;

@RestController
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@Autowired
	private EmailService emailService;
	
	@CrossOrigin
	@PostMapping("/signUp")
	public boolean signUp(@RequestBody User patient) {
		if(loginService.saveNewPatient(patient)) {
			emailService.sendEmail(patient.getEmail(), patient.getName(), "Registration");
			return true;
		}
		return false;
	}

	@CrossOrigin
	@GetMapping("/signIn")
	public boolean login( @RequestParam String email, @RequestParam String password) {
		System.out.println(email);
		System.out.println(password);
		if(loginService.login(email, password)) {
			//session.setAttribute("loggedUser", loginService.getUser(email));
			return true;
		}
		return false;
	}
	
	@CrossOrigin
	@GetMapping("/forgotPassword")
	public boolean forgotPassword(@RequestParam String email) {
		 if(loginService.forgotPassword(email)) {
			return emailService.sendEmail(email, "", "Retrieve password");
		 }
		 return false;
	}
	
	@CrossOrigin
	@RequestMapping(value = "/editData", headers = "content-type=multipart/*", method = RequestMethod.POST)
	public boolean editData(@RequestParam(value = "image", required = true) MultipartFile image,
			@RequestParam(value = "idUser", required = true) int idUser,
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "surname", required = true) String surname) {
		System.out.println(idUser + " " + name + " " + surname + " " + image);
		if (loginService.editData(idUser, name, surname, image)) {
			return true;
		}
		return false;
	}

	@CrossOrigin
	@RequestMapping(value = "/editPassword", method = RequestMethod.POST)
	public boolean editPassword(@RequestParam(value = "idUser", required = true) int idUser,
			@RequestParam(value = "oldPassword", required = true) String oldPassword,
			@RequestParam(value = "newPassword", required = true) String newPassword) {
		if (loginService.editPassword(idUser, oldPassword, newPassword)) {
			return true;
		}
		return false;
	}
	  
	@CrossOrigin
	@GetMapping("/getLoggedUser")
	public User getLoggedUser( @RequestParam String email) {
		return loginService.getUser(email);
	}
}