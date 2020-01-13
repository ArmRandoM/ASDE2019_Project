package ASDE2019.unical.it.medicalcenterservice;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ASDE2019.unical.it.medicalcenterservice.services.EmailService;
import ASDE2019.unical.it.medicalcenterservice.services.NeuralNetworkService;

@SpringBootTest
class MedicalCenterServiceApplicationTests {


	@Autowired
	private EmailService emailService;

	@Autowired
	private NeuralNetworkService neuralService;

	@Test
	void contextLoads() {

	}

	@Test
	void provaEmail() {
		emailService.sendEmail("francesco.tumminelli1995@gmail.com", "Iscrizione", "Benvenuto sul sito");
	}


	@Test
	void neuralNetworkTest() throws IOException
	{
		final BufferedImage img = ImageIO.read(new File(".\\src\\neural_network\\neoB.jpg"));
		neuralService.loadNeuralNetwork(img);
	}
}
