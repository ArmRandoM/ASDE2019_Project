package ASDE2019.unical.it.medicalcenterservice.services;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.sun.mail.smtp.SMTPTransport;

import ASDE2019.unical.it.medicalcenterservice.model.Utente;

@Service
public class EmailService {

	public String sendEmail(String to) {
		String from  = "checcotrash95";  
	    String pass = "evtjaljsseptcefn"; 
	    String subject = "Iscrizione al sito";
        String body = "Benvenuto sul sito!";

        sendFromGMail(from, pass, to, subject, body);
		return null;
	}
	
	 private static void sendFromGMail(String from, String pass, String to, String subject, String body) {
	        Properties props = System.getProperties();
	        String host = "smtp.gmail.com";
	        props.put("mail.smtp.starttls.enable", "true");
	        props.put("mail.smtp.host", host);
	        props.put("mail.smtp.user", from);
	        props.put("mail.smtp.password", pass);
	        props.put("mail.smtp.port", "587");
	        props.put("mail.smtp.auth", "true");

	        Session session = Session.getDefaultInstance(props);
	        MimeMessage message = new MimeMessage(session);

	        try {
	            message.setFrom(new InternetAddress(from));
	            InternetAddress toAddress = new InternetAddress();

	            toAddress = new InternetAddress(to);
	            
	            message.addRecipient(Message.RecipientType.TO, toAddress);
	            

	            message.setSubject(subject);
	            message.setText(body);
	            Transport transport = session.getTransport("smtp");
	            transport.connect(host, from, pass);
	            transport.sendMessage(message, message.getAllRecipients());
	            transport.close();
	        }
	        catch (AddressException ae) {
	            ae.printStackTrace();
	        }
	        catch (MessagingException me) {
	            me.printStackTrace();
	        }
	    }

}