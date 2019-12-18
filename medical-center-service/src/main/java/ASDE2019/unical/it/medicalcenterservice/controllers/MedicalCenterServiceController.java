package ASDE2019.unical.it.medicalcenterservice.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ASDE2019.unical.it.medicalcenterservice.model.Patient;
import ASDE2019.unical.it.medicalcenterservice.model.Post;
import ASDE2019.unical.it.medicalcenterservice.repositories.PostRepo;
import ASDE2019.unical.it.medicalcenterservice.services.EmailService;
import ASDE2019.unical.it.medicalcenterservice.services.LoginService;
import ASDE2019.unical.it.medicalcenterservice.repositories.PostDTO;

@RestController
public class MedicalCenterServiceController {

	@Autowired
	private LoginService loginService;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private PostRepo postRepo;
	
	@CrossOrigin
	@PostMapping("/signUp")
	public boolean signUp(@RequestBody Patient patient) {
		if(loginService.saveNewPatient(patient)) {
			emailService.sendEmail(patient.getEmail(), patient.getName(), "Iscrizione effettuata");
			return true;
		}
		return false;
	}

	@CrossOrigin
	@GetMapping("/signIn")
	public boolean login(@RequestParam String email, @RequestParam String password) {
		return loginService.login(email, password);
	}
	
	@CrossOrigin
	@GetMapping("/forgotPassword")
	public boolean forgotPassword(@RequestParam String email) {
		 if(loginService.forgotPassword(email)) {
			return emailService.sendEmail(email, "", "Recupero password");
		 }
		 return false;
	}
	
	@GetMapping("/user/getall")
    public List<PostDTO> getAllPosts(@Valid @RequestParam("userProfId") Long userProfId){
        List<Post> posts= new ArrayList<>();

        return postRepo.findByUserProfileId(userProfId);
	}
}