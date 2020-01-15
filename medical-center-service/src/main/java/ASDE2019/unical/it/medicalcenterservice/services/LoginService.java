package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserDAO;

@Service
public class LoginService {

	@Autowired
	private UserDAO utenteDao;

	public synchronized boolean saveNewPatient(User utente) {
		try {
			if (!utenteDao.existsById(utente.getIdUser())) {
				utenteDao.save(utente);
				return true;
			} else
				return false;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	public synchronized boolean login(String email, String password) {
		try {
			return utenteDao.existsByEmailAndPassword(email, password);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}
	
	public synchronized boolean forgotPassword(String email) {
		try {
			return utenteDao.existsByEmail(email);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}
	
	
	public synchronized User getUser(String email) {
		try {
			return utenteDao.findByEmail(email);
		} catch (Exception e) {
			return null;
		}
	}
	
	public synchronized boolean editData(int idUser, String name, String surname, MultipartFile image) {
		System.out.println(idUser + " " + name + " " + surname + " " + image);
		try {
			User user = utenteDao.findById(idUser);
			user.setName(name);
			user.setSurname(surname);
			user.setImage(image.getBytes());
			utenteDao.save(user);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	public synchronized boolean editPassword(int idUser, String oldPassword, String newPassword) {
		try {
			User user = utenteDao.findById(idUser);
			if (user.getPassword().equalsIgnoreCase(oldPassword)) {
				user.setPassword(newPassword);
				utenteDao.save(user);
				return true;
			} else
				return false;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}
}

