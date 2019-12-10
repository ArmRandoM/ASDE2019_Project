package ASDE2019.unical.it.medicalcenterservice.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Patient;

@Repository
public interface PatientInterface extends JpaRepository<Patient,Long> {
	@Override
	Optional<Patient> findById(Long PatientId);
	
	boolean existsByEmail(String username);
	
	Patient findByEmail(String email);



    @Query(value="Select * from patient u where u.email=:email",nativeQuery = true)
    Optional<Patient> getUserByEmail(@Param("email") String email);

}
