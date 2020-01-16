package ASDE2019.unical.it.medicalcenterservice.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Report;
import ASDE2019.unical.it.medicalcenterservice.model.User;


@Repository
public interface ReportDAO extends CrudRepository<Report, Integer> {
	
	boolean existsById(int idReport);
	
	Report findById(int idReport);
	
	List<Report> findAllByUser(User user);
	
}
