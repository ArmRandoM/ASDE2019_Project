package ASDE2019.unical.it.medicalcenterservice.services;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.repositories.ReportDAO;

@Service
public class ReportService {

	@Autowired
	private ReportDAO reportDAO;

	
	public synchronized void saveNewReport(Report report) {
		try {
			reportDAO.save(report);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}


	public void deleteReport(int idReport) {
		try {
			Report report = reportDAO.findById(idReport);
			reportDAO.delete(report);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public void updateReport(int idReport, String docValutation) {
		try {
			Report report = reportDAO.findById(idReport);
			report.setDocValutation(docValutation);
			reportDAO.save(report);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}


	public List<Report> getReports(User u) {
		try {
			return reportDAO.findAllByUser(u);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
	
}
