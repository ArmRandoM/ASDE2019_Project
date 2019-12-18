package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.http.ResponseEntity;

import ASDE2019.unical.it.medicalcenterservice.model.Comment;

public interface CommentService {
	Comment saveComment(Long posId,Comment comment);
    Comment editComment(Long commentId,Comment comment);
    ResponseEntity<?> deleteComment(Long commentId);
}
