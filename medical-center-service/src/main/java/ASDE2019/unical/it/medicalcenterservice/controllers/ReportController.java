package ASDE2019.unical.it.medicalcenterservice.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ASDE2019.unical.it.medicalcenterservice.dto.ReportDTO;
import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.services.LoginService;
import ASDE2019.unical.it.medicalcenterservice.services.ReportService;

@RestController
public class ReportController {

	
	@Autowired
	private ReportService reportService;
	
	@Autowired
	private LoginService loginService;
	
	
	
	@CrossOrigin
	@PostMapping("/saveReport")
	public boolean saveReport(@RequestBody Report report) {
		//TODO bisogna dare al report l'utente che lo ha creato (cioè quella della sessione)
		try {
			User u = loginService.getUser("francesco.tumminelli95@gmail.com");
			report.setUser(u);
			reportService.saveNewReport(report);
			User u1 = loginService.getUser("francesco.tumminelli95@gmail.com");
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}
	
	
	@CrossOrigin
	@GetMapping("/getReportsFromUser")
	public List<ReportDTO> getReportsFromUser(@RequestParam String email) {
		//TODO bisogna dare al report l'utente che lo ha creato (cioè quella della sessione)
		try {
			User u = loginService.getUser("francesco.tumminelli95@gmail.com");
			List<ReportDTO> reportsBean = new ArrayList<ReportDTO>();
			for (Report report : u.getReports()) {
				ReportDTO reportDTO = new ReportDTO();
				reportDTO.convertReportEntityToBean(report);
				reportsBean.add(reportDTO);
			}
			return reportsBean;
		} catch (Exception e) {
			return null;
		}
		
	}

	@CrossOrigin
	@PostMapping("/deleteReport")
	public boolean deleteReport(@RequestBody Report report) {
		try {
			System.out.println(report.getIdReport());
			reportService.deleteReport(report);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

	@CrossOrigin
	@PostMapping("/updateReport")
	public boolean updateReport(@RequestBody Report report) {
		try {
			System.out.println(report.getIdReport());
			reportService.updateReport(report);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}
	
}
