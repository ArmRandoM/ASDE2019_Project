package ASDE2019.unical.it.medicalcenterservice.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Utente;

@Repository
public interface UtenteDAO extends CrudRepository<Utente, String>  {

	Utente findByEmailAndPassword(String email, String password);
}
