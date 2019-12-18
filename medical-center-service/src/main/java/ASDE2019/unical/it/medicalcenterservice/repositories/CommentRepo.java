package ASDE2019.unical.it.medicalcenterservice.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ASDE2019.unical.it.medicalcenterservice.model.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long> {
    Page<Comment> findByPostId(Long postId, Pageable pageable);
}
