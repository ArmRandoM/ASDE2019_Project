package ASDE2019.unical.it.medicalcenterservice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.imageio.ImageIO;
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
import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.repositories.ReportDAO;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserDAO;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserDAO;
import ASDE2019.unical.it.medicalcenterservice.services.NeuralNetworkService;

@SpringBootTest
class MedicalCenterServiceApplicationTests {

	@Autowired
	private UserDAO userDao;
	
	@Autowired
	private ReportDAO reportDao;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private NeuralNetworkService neuralService;
	
	@Test
	void contextLoads() {
		
	}
	
	@Test
	void provaEmail() {
		//emailService.sendEmail("francesco.tumminelli1995@gmail.com", "Iscrizione", "Benvenuto sul sito");
	}

	@Test
	void provaFindPassword() {
		/*Patient u = new Patient("Fra", "Tum", "Prova12345", "francesco.tumminelli1995@gmail.com", true);
		repository.save(u);
		System.out.println(repository.findById("francesco.tumminelli1995@gmail.com").get().getPassword());*/
	}
	
	@Test
	void neuralNetworkTest()
	{
		//neuralService.loadNeuralNetwork();
	}
	
	@Test
	void provaReport() throws IOException {
		User ciccio = userDao.save(new User("Fra", "Tum", "Prova12345", "francesco.tumminelli1995@gmail.com", true, new ArrayList<Report>()));
		reportDao.save(new Report(convertImageToBlob(), ciccio));	
		reportDao.save(new Report(convertImageToBlob(), ciccio));
		User ciccio2 = userDao.findById(1).get();
		ciccio.setEmail("Arm");
		userDao.save(ciccio);
		convertBlobToImage(ciccio2.getReports().get(0).getImg());
		System.out.println("Ciao");
	}
	
	private byte [] convertImageToBlob() throws IOException {
		BufferedImage bImage = ImageIO.read(new File("src\\img\\doctorAI.jpg"));
	    ByteArrayOutputStream bos = new ByteArrayOutputStream();
	    ImageIO.write(bImage, "jpg", bos );
	    return bos.toByteArray();
	}
	
	private void convertBlobToImage(byte[] img) throws IOException {
		ByteArrayInputStream bis = new ByteArrayInputStream(img);
	    BufferedImage bImage2 = ImageIO.read(bis);
	    ImageIO.write(bImage2, "jpg", new File("src\\img\\output.jpg") );
	    System.out.println("image created");
	}
	
}

