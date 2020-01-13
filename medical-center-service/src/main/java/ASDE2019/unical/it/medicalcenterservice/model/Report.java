package ASDE2019.unical.it.medicalcenterservice.model;


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
	private byte[] img;

	@ManyToOne
	private User user;

	public Report() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Report(byte[] img, User user) {
		super();
		this.img = img;
		this.user = user;
	}

	public int getIdReport() {
		return idReport;
	}

	public void setIdReport(int idReport) {
		this.idReport = idReport;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
