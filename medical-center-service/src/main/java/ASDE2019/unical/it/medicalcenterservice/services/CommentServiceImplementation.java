package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ASDE2019.unical.it.medicalcenterservice.model.Comment;
import ASDE2019.unical.it.medicalcenterservice.repositories.CommentRepo;
import ASDE2019.unical.it.medicalcenterservice.repositories.PostRepo;

@Service
public class CommentServiceImplementation implements CommentService {

    @Autowired
    PostRepo postRepository;

    @Autowired
    CommentRepo commentRepository;

    @Override
    public Comment saveComment(Long postId,Comment comment){
        return postRepository.findById(postId).map(post -> {
            comment.setPost(post);
            return commentRepository.save(comment);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));

    }


    @Override
    public Comment editComment(Long commentId, Comment comment){
        return commentRepository.findById(commentId).map(updatedComment -> {
            updatedComment.setText(comment.getText());
            return commentRepository.save(updatedComment);
        }).orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + "not found"));
    }


    @Override
    public ResponseEntity deleteComment(Long commentId){

        return commentRepository.findById(commentId).map(comment -> {
            commentRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + " not found"));
    }

}