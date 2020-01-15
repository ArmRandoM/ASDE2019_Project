package ASDE2019.unical.it.medicalcenterservice.dto;

import ASDE2019.unical.it.medicalcenterservice.model.Report;

public class ReportDTO {

	private int idReport;

	private byte[] image;

	private String reportName;

	private String reportDescription;

	private String iaValutation;

	private String docValutation;

	public ReportDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ReportDTO(int idReport, byte[] image, String reportName, String reportDescription, String iaValutation,
			String docValutation) {
		super();
		this.idReport = idReport;
		this.image = image;
		this.reportName = reportName;
		this.reportDescription = reportDescription;
		this.iaValutation = iaValutation;
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

	public String getDocValutation() {
		return docValutation;
	}

	public String getIaValutation() {
		return iaValutation;
	}

	public int getIdReport() {
		return idReport;
	}

	public byte[] getImage() {
		return image;
	}

	public String getReportDescription() {
		return reportDescription;
	}

	public String getReportName() {
		return reportName;
	}

	public void setDocValutation(String docValutation) {
		this.docValutation = docValutation;
	}

	public void setIaValutation(String iaValutation) {
		this.iaValutation = iaValutation;
	}

	public void setIdReport(int idReport) {
		this.idReport = idReport;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public void setReportDescription(String reportDescription) {
		this.reportDescription = reportDescription;
	}


	public void setReportName(String reportName) {
		this.reportName = reportName;
	}


}
