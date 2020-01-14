package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.model.Report;
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


	public void deleteReport(Report report) {
		try {
			reportDAO.deleteById(report.getIdReport());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public void updateReport(Report report) {
		try {
			reportDAO.deleteById(report.getIdReport());
			reportDAO.save(report);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
}
