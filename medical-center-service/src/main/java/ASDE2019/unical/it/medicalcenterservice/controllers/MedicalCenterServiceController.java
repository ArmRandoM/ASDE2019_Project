package ASDE2019.unical.it.medicalcenterservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ASDE2019.unical.it.medicalcenterservice.model.Utente;
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
	public String signUp(@RequestBody Utente utente) {
		String response = loginService.saveNewUtente(utente);
		if(response.equals("User registered")) {
			emailService.sendEmail(utente.getEmail());
		}
		return loginService.saveNewUtente(utente);
	}
	
	
	@CrossOrigin
	@PostMapping("/login")
	public String login(@RequestBody Utente utente) {
		return loginService.login(utente);
	}
	
}