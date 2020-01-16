package ASDE2019.unical.it.medicalcenterservice.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.User;

@Repository
public interface UserDAO extends CrudRepository<User, Integer> {

	boolean existsByEmail(String email);

	boolean existsByEmailAndPassword(String email, String password);

	User findByEmail(String email);

	User findById(int idUser);

	String findPasswordByEmail(String email);

	@Query("FROM User U WHERE U.name LIKE %:value% OR U.surname LIKE %:value%")
	List<User> findUsersByValue(String value);
}
