package ASDE2019.unical.it.medicalcenterservice.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



@Entity
public class Report {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idReport;

	@Column(columnDefinition = "blob")
	private byte[] image;

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

	public Report(byte[] image, String reportName, String reportDescription, String iaValutation, String docValutation,
			User user) {
		super();
		this.image = image;
		this.reportName = reportName;
		this.reportDescription = reportDescription;
		this.iaValutation = iaValutation;
		this.docValutation = docValutation;
		this.user = user;
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

	public User getUser() {
		return user;
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

	public void setUser(User user) {
		this.user = user;
	}




}
