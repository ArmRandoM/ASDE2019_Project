package ASDE2019.unical.it.medicalcenterservice.forms;

import org.springframework.web.multipart.MultipartFile;

public class saveReportForm
{
	private String reportName;
	private String reportDescription;
	private String userEmail;
	private MultipartFile image;

	public saveReportForm()
	{
		reportName = "";
		reportDescription = "";
		userEmail = "";
		image = null;
	}

	public MultipartFile getImage()
	{
		return image;
	}

	public String getReportDescription()
	{
		return reportDescription;
	}

	public String getReportName()
	{
		return reportName;
	}

	public String getUserEmail()
	{
		return userEmail;
	}

	public void setImage(MultipartFile image)
	{
		this.image = image;
	}

	public void setReportDescription(String reportDescription)
	{
		this.reportDescription = reportDescription;
	}

	public void setReportName(String reportName)
	{
		this.reportName = reportName;
	}

	public void setUserEmail(String userEmail)
	{
		this.userEmail = userEmail;
	}
}
