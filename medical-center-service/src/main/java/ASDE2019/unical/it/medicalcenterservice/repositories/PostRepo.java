package ASDE2019.unical.it.medicalcenterservice.repositories;
import ASDE2019.unical.it.medicalcenterservice.model.Post;
import ASDE2019.unical.it.medicalcenterservice.model.UserProfile;
import ASDE2019.unical.it.medicalcenterservice.repositories.PostDTO;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;


@Repository
public interface PostRepo extends JpaRepository<Post, Long>,PostRepo2 {








}
