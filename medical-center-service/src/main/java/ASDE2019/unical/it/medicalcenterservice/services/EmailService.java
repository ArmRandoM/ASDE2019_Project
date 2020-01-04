package ASDE2019.unical.it.medicalcenterservice.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.OutputStream;
import java.io.StringWriter;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.repositories.PatientDAO;

@Service
public class EmailService {

	@Autowired
	private PatientDAO utenteDao;
	
	private static String host = "smtp.gmail.com";
	
	public synchronized Boolean sendEmail(String to, String username, String subject) {
		String from = "checcotrash95";
		String pass = "evtjaljsseptcefn";
		return sendFromGMail(from, pass, to, subject, username);
	}
	
	private static Properties initializeProps(String from, String pass) {
		Properties props = System.getProperties();
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.user", from);
		props.put("mail.smtp.password", pass);
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		return props;
	}

	private Boolean sendFromGMail(String from, String pass, String to, String subject, String username) {
		Properties props = initializeProps(from, pass);
		Session session = Session.getDefaultInstance(props);
		MimeMessage message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress(from));
			InternetAddress toAddress = new InternetAddress();

			toAddress = new InternetAddress(to);

			message.addRecipient(Message.RecipientType.TO, toAddress);

			 message.setSubject(subject);
	     
	         BodyPart messageBodyPart = new MimeBodyPart();
	         MimeMultipart multipart = new MimeMultipart("related");
	         String htmlText = "";
	         if(subject.equals("Recupero password")) 
	         {
	        	try {
	        		htmlText = "Your passowrd is: "+utenteDao.findById(to).get().getPassword(); 
				} catch (Exception e) {
					return false;
				}
	        	message.setText(htmlText);
	         }
	         else
	         {
	        	 htmlText = "<H1  style=\"text-align: center;\">Welcome "+username+"</H1> <div style=\"text-align: center;\"> <img src=\"cid:image\" > </div>";	         
		         messageBodyPart.setContent(htmlText, "text/html");
		         multipart.addBodyPart(messageBodyPart);
		         messageBodyPart = new MimeBodyPart();
		         DataSource fds = new FileDataSource("src/img/welcomeImage.PNG");
		         messageBodyPart.setDataHandler(new DataHandler(fds));
		         messageBodyPart.setHeader("Content-ID", "<image>");
		         multipart.addBodyPart(messageBodyPart);
		         message.setContent(multipart);
	         }
	        
			Transport transport = session.getTransport("smtp");
			transport.connect(host, from, pass);
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
			return true;
		} catch (AddressException ae) {
			ae.printStackTrace();
			return false;
		} catch (MessagingException me) {
			me.printStackTrace();
			return false;
		}
	}
	
	
	


}
