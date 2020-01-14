package ASDE2019.unical.it.medicalcenterservice.repositories;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.User;

@Repository
public interface UserDAO extends CrudRepository<User, Integer> {

	boolean existsByEmailAndPassword(String email, String password);
	
	boolean existsByEmail(String email);
	
	String findPasswordByEmail(String email);

	User findByEmail(String email);
	
	User findById(int idUser);
	
}
