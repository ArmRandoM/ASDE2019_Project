package ASDE2019.unical.it.medicalcenterservice.controllers;

import javax.mail.Session;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ASDE2019.unical.it.medicalcenterservice.model.Patient;
import ASDE2019.unical.it.medicalcenterservice.services.EmailService;
import ASDE2019.unical.it.medicalcenterservice.services.LoginService;

@RestController
public class MedicalCenterServiceController {

	@Autowired
	private LoginService loginService;
	
	@Autowired
	private EmailService emailService;
	
	@CrossOrigin
	@PostMapping("/signUp")
	public boolean signUp(@RequestBody Patient patient) {
		if(loginService.saveNewPatient(patient)) {
			emailService.sendEmail(patient.getEmail(), patient.getName(), "Registration");
			return true;
		}
		return false;
	}

	@CrossOrigin
	@GetMapping("/signIn")
	public boolean login(HttpSession session, @RequestParam String email, @RequestParam String password) {
		
		if(loginService.login(email, password)) {
			session.setAttribute("loggedUser", loginService.getUser(email));
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
	
	/*@CrossOrigin
	@GetMapping("/getLoggedUser")
	public void getLoggedUser(HttpSession session) {
		 System.out.println(session.getAttribute("loggedUser").toString());
	}*/
}