package ASDE2019.unical.it.medicalcenterservice.controllers;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ASDE2019.unical.it.medicalcenterservice.dto.ReportDTO;
import ASDE2019.unical.it.medicalcenterservice.forms.saveReportForm;
import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.services.LoginService;
import ASDE2019.unical.it.medicalcenterservice.services.NeuralNetworkService;
import ASDE2019.unical.it.medicalcenterservice.services.ReportService;

@RestController
public class ReportController {


	@Autowired
	private ReportService reportService;

	@Autowired
	private LoginService loginService;

	@Autowired
	private NeuralNetworkService neuralService;


	@CrossOrigin
	@RequestMapping(value = "/deleteReport", method = RequestMethod.POST)
	public boolean deleteReport(@RequestParam(value = "idReport", required = true) int idReport) {
		try {
			reportService.deleteReport(idReport);
			return true;
		} catch (final Exception e) {
			return false;
		}

	}


	@CrossOrigin
	@GetMapping("/getReportsFromUser")
	public List<ReportDTO> getReportsFromUser(@RequestParam String email) {
		//TODO bisogna dare al report l'utente che lo ha creato (cioè quella della sessione)
		try {
			final User u = loginService.getUser(email);
			final List<Report> reports = reportService.getReports(u);
			final List<ReportDTO> reportsBean = new ArrayList<ReportDTO>();
			for (final Report report : reports) {
				final ReportDTO reportDTO = new ReportDTO();
				reportDTO.convertReportEntityToBean(report);
				reportsBean.add(reportDTO);
			}
			return reportsBean;
		} catch (final Exception e) {
			return null;
		}

	}

	@CrossOrigin
	@RequestMapping(value = "/saveReport", headers = "content-type=multipart/*", method = RequestMethod.POST)
	public boolean saveReport(@ModelAttribute saveReportForm reportForm) {
		//TODO bisogna dare al report l'utente che lo ha creato (cioè quella della sessione)
		try
		{
			final String name = reportForm.getReportName();
			final String description = reportForm.getReportDescription();
			final MultipartFile image = reportForm.getImage();

			final User user = loginService.getUser(reportForm.getUserEmail());
			final Report report = new Report(image.getBytes(), name, description, "", "", user);
			//report.setUser(u);
			final InputStream in = new ByteArrayInputStream(image.getBytes());
			final BufferedImage imageForNeuralNetwork = ImageIO.read(in);

			final String verdict = neuralService.loadNeuralNetwork(imageForNeuralNetwork);
			report.setIaValutation(verdict);
			report.setUser(user);
			reportService.saveNewReport(report);
			return true;
		} catch (final Exception e) {
			return false;
		}

	}

	@CrossOrigin
	@RequestMapping(value = "/updateReport", method = RequestMethod.POST)
	public boolean updateReport(@RequestParam(value = "idReport", required = true) int idReport,
			@RequestParam(value = "docValutation", required = true) String docValutation) {
		try {
			reportService.updateReport(idReport, docValutation);
			return true;
		} catch (final Exception e) {
			return false;
		}

	}

}
