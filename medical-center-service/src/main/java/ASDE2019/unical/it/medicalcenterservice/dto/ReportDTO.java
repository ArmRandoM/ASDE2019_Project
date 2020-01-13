package ASDE2019.unical.it.medicalcenterservice.dto;

import ASDE2019.unical.it.medicalcenterservice.model.Report;

public class ReportDTO {

	private int idReport;
	
	private String image;
	
	private String reportName;
	
	private String reportDescription;
	
	private String iaValutation;
	
	private String docValutation;

	public int getIdReport() {
		return idReport;
	}

	public void setIdReport(int idReport) {
		this.idReport = idReport;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

	public ReportDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ReportDTO(int idReport, String image, String reportName, String reportDescription, String iaValutation,
			String docValutation) {
		super();
		this.idReport = idReport;
		this.image = image;
		this.reportName = reportName;
		this.reportDescription = reportDescription;
		this.iaValutation = iaValutation;
		this.docValutation = docValutation;
	}

	public void setDocValutation(String docValutation) {
		this.docValutation = docValutation;
	}
	
	
	public void convertReportEntityToBean(Report report) {
		this.idReport = report.getIdReport();
		this.image = report.getImage();
		this.reportName = report.getReportName();
		this.reportDescription = report.getReportDescription();
		this.iaValutation = report.getIaValutation();
		this.docValutation = report.getDocValutation();
	}
	
	
}
