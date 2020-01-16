package ASDE2019.unical.it.medicalcenterservice.services;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserDAO;

@Service
public class LoginService {

	@Autowired
	private UserDAO utenteDao;

	public synchronized boolean editData(int idUser, String name, String surname, MultipartFile image, String biography) {
		System.out.println(idUser + " " + name + " " + surname + " " + image + " " + biography);
		try {
			final User user = utenteDao.findById(idUser);
			user.setName(name);
			user.setSurname(surname);
			if(image != null)
				user.setImage(image.getBytes());
			if(biography == null)
				biography = "";
			user.setBiography(biography);
			utenteDao.save(user);
			return true;
		} catch (final Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	public synchronized boolean editPassword(int idUser, String oldPassword, String newPassword) {
		try {
			final User user = utenteDao.findById(idUser);
			if (user.getPassword().equalsIgnoreCase(oldPassword)) {
				user.setPassword(newPassword);
				utenteDao.save(user);
				return true;
			} else
				return false;
		} catch (final Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	public synchronized boolean forgotPassword(String email) {
		try {
			return utenteDao.existsByEmail(email);
		} catch (final Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}


	public synchronized User getUser(String email) {
		try {
			return utenteDao.findByEmail(email);
		} catch (final Exception e) {
			return null;
		}
	}

	public synchronized boolean login(String email, String password) {
		try {
			return utenteDao.existsByEmailAndPassword(email, password);
		} catch (final Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	public synchronized boolean saveNewPatient(User utente) {
		try {
			if (!utenteDao.existsById(utente.getIdUser())) {

				final BufferedImage image = ImageIO.read(new File("./src/img/profileImage.jpg"));
			    final ByteArrayOutputStream bos = new ByteArrayOutputStream();
			    ImageIO.write(image, "jpg", bos );
			    final byte [] data = bos.toByteArray();
				utente.setImage(data);

				utenteDao.save(utente);
				return true;
			} else
				return false;
		} catch (final Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}
}

