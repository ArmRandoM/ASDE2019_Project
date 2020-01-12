package ASDE2019.unical.it.medicalcenterservice.services;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;

import org.springframework.stereotype.Service;

@Service
public class NeuralNetworkService {

	public String loadNeuralNetwork(BufferedImage img)
	{
		String s = null;
		String lastLine = "";
		File tempImage = null;

		try
		{
			// Save the image as temporary file
			tempImage = File.createTempFile("neural", ".jpg", new File("./src/neural_network/"));
			ImageIO.write(img, "jpg", tempImage);
		}
		catch (final IOException e1)
		{
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		try
		{
			// Run the python script passing the image name
			// Process neuralNetwork = Runtime.getRuntime().exec("python src/neural_network/loadModel.py neoM.jpg");
			final Process neuralNetwork = Runtime.getRuntime().exec("python src/neural_network/loadModel.py "+tempImage.getName());

			final BufferedReader consoleOutput = new BufferedReader(new InputStreamReader(neuralNetwork.getInputStream()));

			System.out.println("Output:");
			while ((s = consoleOutput.readLine()) != null)
			{
				System.out.println(s);
				lastLine = s;
			}
		}
		catch (final IOException e)
		{
			System.out.println("Exception in loadNeuralNetwork:");
			e.printStackTrace();
		}

		// Grab the number from the string (prediction). Can be modified if the script output will be different.
		Double verdict = 0.0;
		final Pattern p = Pattern.compile("-?[0-9]+(?:.[0-9]+)?");
		final Matcher m = p.matcher(lastLine);
		while(m.find())
			verdict = Double.valueOf(m.group());

		System.out.println(verdict);

		// Delete the temporary file
		if(tempImage != null)
			tempImage.delete();

		return verdict >= 0 ? "Malignant" : "Benign";
	}
}
