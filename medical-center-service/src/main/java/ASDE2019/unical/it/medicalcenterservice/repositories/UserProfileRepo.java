package ASDE2019.unical.it.medicalcenterservice.repositories;

import ASDE2019.unical.it.medicalcenterservice.model.UserProfile;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepo extends JpaRepository<UserProfile,Long> {
    @Override
    Optional<UserProfile> findById(Long userId);
}
