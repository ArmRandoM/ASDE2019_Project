package ASDE2019.unical.it.medicalcenterservice.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class ImageConverter {

	private byte [] convertImageToBlob() throws IOException {
		BufferedImage bImage = ImageIO.read(new File("src\\img\\doctorAI.jpg"));
	    ByteArrayOutputStream bos = new ByteArrayOutputStream();
	    ImageIO.write(bImage, "jpg", bos );
	    return bos.toByteArray();
	}
	
}
