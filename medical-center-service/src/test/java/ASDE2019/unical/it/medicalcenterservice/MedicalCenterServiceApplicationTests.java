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

import ASDE2019.unical.it.medicalcenterservice.model.Patient;
import ASDE2019.unical.it.medicalcenterservice.repositories.PatientDAO;
import ASDE2019.unical.it.medicalcenterservice.services.EmailService;

@SpringBootTest
class MedicalCenterServiceApplicationTests {

	@Autowired
	private PatientDAO repository;
	
	@Autowired
	private EmailService emailService;
	
	@Test
	void contextLoads() {
		
	}
	
	@Test
	void provaEmail() {
		//emailService.sendEmail("armnd.6793@gmail.com", "Armando", "Iscrizione", "Benvenuto sul sito");
	}
	
	@Test
	void provaFindPassword() {
		Patient u = new Patient("Fra", "Tum", "Prova12345", "francesco.tumminelli1995@gmail.com");
		repository.save(u);
		System.out.println(repository.findById("francesco.tumminelli1995@gmail.com").get().getPassword());
	}


}
