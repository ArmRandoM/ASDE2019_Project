package ASDE2019.unical.it.medicalcenterservice;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.sun.mail.smtp.SMTPTransport;

import ASDE2019.unical.it.medicalcenterservice.services.EmailService;

@SpringBootTest
class MedicalCenterServiceApplicationTests {

	/*@Autowired
	private UtenteDAO repository;*/
	
	@Autowired
	private EmailService emailService;
	
	@Test
	void contextLoads() {
		
	}
	
	@Test
	void provaEmail() {
		emailService.sendEmail("francesco.tumminelli1995@gmail.com", "Iscrizione", "Benvenuto sul sito");
	}


}
