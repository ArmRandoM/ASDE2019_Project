package ASDE2019.unical.it.medicalcenterservice.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;

@RestController
public class ReportController {

	@CrossOrigin
	@PostMapping("/saveReport")
	public boolean saveReport(@RequestBody Report report) {
		return false;
		
	}
	
}
