package ASDE2019.unical.it.medicalcenterservice.repositories;

import ASDE2019.unical.it.medicalcenterservice.repositories.PostDTO;
import org.hibernate.validator.constraints.URL;

import java.util.List;

public interface PostRepo2 {

    List<PostDTO> findByUserProfileId(Long UserProdId);
}