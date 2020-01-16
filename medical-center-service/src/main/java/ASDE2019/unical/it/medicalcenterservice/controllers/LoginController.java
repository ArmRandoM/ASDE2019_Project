package ASDE2019.unical.it.medicalcenterservice.controllers;

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
	@RequestMapping(value = "/editData", headers = "content-type=multipart/*", method = RequestMethod.POST)
	public boolean editData(@RequestParam(value = "image", required = false) MultipartFile image,
			@RequestParam(value = "idUser", required = true) int idUser,
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "surname", required = true) String surname,
			@RequestParam(value = "biography", required = false) String biography)
	{
		System.out.println(idUser + " " + name + " " + surname + " " + image + " " + biography);
		if (loginService.editData(idUser, name, surname, image, biography))
			return true;
		return false;
	}

	@CrossOrigin
	@RequestMapping(value = "/editPassword", method = RequestMethod.POST)
	public boolean editPassword(@RequestParam(value = "idUser", required = true) int idUser,
			@RequestParam(value = "oldPassword", required = true) String oldPassword,
			@RequestParam(value = "newPassword", required = true) String newPassword) {
		if (loginService.editPassword(idUser, oldPassword, newPassword))
			return true;
		return false;
	}

	@CrossOrigin
	@GetMapping("/forgotPassword")
	public boolean forgotPassword(@RequestParam String email) {
		 if(loginService.forgotPassword(email))
			return emailService.sendEmail(email, "", "Retrieve password");
		 return false;
	}

	@CrossOrigin
	@GetMapping("/getFollowers")
	public User getFollowers( @RequestParam String email) {
		return null;
	}

	@CrossOrigin
	@GetMapping("/getFollows")
	public User getFollows( @RequestParam String email) {
		return null;
	}

	@CrossOrigin
	@GetMapping("/getLoggedUser")
	public User getLoggedUser( @RequestParam String email) {
		return loginService.getUser(email);
	}

	@CrossOrigin
	@GetMapping("/getPatients")
	public User getPatients( @RequestParam String email) {
		return null;
	}

	@CrossOrigin
	@GetMapping("/signIn")
	public boolean login( @RequestParam String email, @RequestParam String password) {
		System.out.println(email);
		System.out.println(password);
		if(loginService.login(email, password))
			//session.setAttribute("loggedUser", loginService.getUser(email));
			return true;
		return false;
	}

	@CrossOrigin
	@PostMapping("/signUp")
	public boolean signUp(@RequestBody User patient) {
		if(loginService.saveNewPatient(patient)) {
			emailService.sendEmail(patient.getEmail(), patient.getName(), "Registration");
			return true;
		}
		return false;
	}
}