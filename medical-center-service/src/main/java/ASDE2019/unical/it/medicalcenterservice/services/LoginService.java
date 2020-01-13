package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}

