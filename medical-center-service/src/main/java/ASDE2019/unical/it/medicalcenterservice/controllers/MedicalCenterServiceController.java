package ASDE2019.unical.it.medicalcenterservice.controllers;

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
			emailService.sendEmail(patient.getEmail(), "Iscrizione effettuata", "Gentile "+patient.getName()+" benvenuto sul sito");
			return true;
		}
		return false;
	}

	@CrossOrigin
	@GetMapping("/signIn")
	public boolean login(@RequestParam String email, @RequestParam String password) {
		return loginService.login(email, password);
	}
}