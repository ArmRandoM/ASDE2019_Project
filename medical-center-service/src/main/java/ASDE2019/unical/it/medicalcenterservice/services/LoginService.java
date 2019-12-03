package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.model.Patient;
import ASDE2019.unical.it.medicalcenterservice.repositories.PatientDAO;

@Service
public class LoginService {

	@Autowired
	private PatientDAO utenteDao;

	public synchronized boolean saveNewPatient(Patient utente) {
		try {
				if (!utenteDao.existsById(utente.getEmail())) {
					utenteDao.save(utente);
					return true;
				}
				else
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

}
