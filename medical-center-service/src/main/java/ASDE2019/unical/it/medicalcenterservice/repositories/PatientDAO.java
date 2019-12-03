package ASDE2019.unical.it.medicalcenterservice.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Patient;

@Repository
public interface PatientDAO extends CrudRepository<Patient, String>  {

	boolean existsByEmailAndPassword(String email, String password);
}
