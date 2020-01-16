package ASDE2019.unical.it.medicalcenterservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Report;


@Repository
public interface ReportDAO extends CrudRepository<Report, Integer> {

	boolean existsById(int idReport);

	Report findById(int idReport);

	@Query("FROM Report R WHERE R.user.idUser=:idUser")
	List<Report> findReportsByUserID(int idUser);
}
