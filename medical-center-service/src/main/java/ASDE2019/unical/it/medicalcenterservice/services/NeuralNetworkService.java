package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class NeuralNetworkService {
	
	public String loadNeuralNetwork()
	{
		String s = null;
		String lastLine = "";
		
		//TODO SAVE THE IMAGE INTO A TEMPORARY FOLDER, RUN THE SCRIPT AND THEN SAVE THE IMAGE INTO THE DB (?)

		try
		{
			// Run the python script passing the image name (hardcoded now)
			Process neuralNetwork = Runtime.getRuntime().exec("python src/neural_network/loadModel.py neoM.jpg");
			
			BufferedReader consoleOutput = new BufferedReader(new InputStreamReader(neuralNetwork.getInputStream()));
			
			System.out.println("Output:");
			while ((s = consoleOutput.readLine()) != null)
			{
				System.out.println(s);
				lastLine = s;
			}
		}
		catch (IOException e)
		{
			System.out.println("Exception in loadNeuralNetwork:");
			e.printStackTrace();
		}
		
		// Grab the number from the string (prediction). Can be modified if the script output will be different.
		Double verdict = 0.0;
		Pattern p = Pattern.compile("-?[0-9]+(?:.[0-9]+)?");
        Matcher m = p.matcher(lastLine);
        while(m.find())
            verdict = Double.valueOf(m.group());
        
        System.out.println(verdict);
		return "";
	}
}
