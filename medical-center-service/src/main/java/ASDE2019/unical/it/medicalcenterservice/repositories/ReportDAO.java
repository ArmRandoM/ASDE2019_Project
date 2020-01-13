package ASDE2019.unical.it.medicalcenterservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Report;


@Repository
public interface ReportDAO extends CrudRepository<Report, Integer> {

}
