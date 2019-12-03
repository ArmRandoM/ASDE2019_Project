package ASDE2019.unical.it.medicalcenterservice.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.model.Utente;
import ASDE2019.unical.it.medicalcenterservice.repositories.UtenteDAO;

@Service
public class LoginService {

	@Autowired
	private UtenteDAO utenteDao;

	public synchronized String saveNewUtente(Utente utente) {
		try {
			if (!utenteDao.findById(utente.getEmail()).isPresent()) {
				utenteDao.save(utente);
				return "User registered";
			} else {
				return "Email already used";
			}

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	public synchronized String login(Utente utente) {
		try {

			if (utenteDao.findByEmailAndPassword(utente.getEmail(), utente.getPassword()) != null) {
				return "Login Success";
			} else {
				return "Login Error";
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

}
