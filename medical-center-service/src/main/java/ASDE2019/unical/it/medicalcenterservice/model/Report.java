package ASDE2019.unical.it.medicalcenterservice.model;


import java.awt.Image;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity
public class Report {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idReport;
	
	@Column(length=100000)
	private String image;
	
	private String reportName;
	
	private String reportDescription;
	
	private String iaValutation;
	
	private String docValutation;
	
	@ManyToOne
	private User user;


	public Report() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Report(String image, String reportName, String reportDescription, String iaValutation, String docValutation,
			User user) {
		super();
		this.image = image;
		this.reportName = reportName;
		this.reportDescription = reportDescription;
		this.iaValutation = iaValutation;
		this.docValutation = docValutation;
		this.user = user;
	}

	public int getIdReport() {
		return idReport;
	}

	public void setIdReport(int idReport) {
		this.idReport = idReport;
	}


	public String getReportName() {
		return reportName;
	}

	public void setReportName(String reportName) {
		this.reportName = reportName;
	}

	public String getReportDescription() {
		return reportDescription;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setReportDescription(String reportDescription) {
		this.reportDescription = reportDescription;
	}

	public String getIaValutation() {
		return iaValutation;
	}

	public void setIaValutation(String iaValutation) {
		this.iaValutation = iaValutation;
	}

	public String getDocValutation() {
		return docValutation;
	}

	public void setDocValutation(String docValutation) {
		this.docValutation = docValutation;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}




}
