package ASDE2019.unical.it.medicalcenterservice.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import ASDE2019.unical.it.medicalcenterservice.RestResponse;
import ASDE2019.unical.it.medicalcenterservice.model.Comment;
import ASDE2019.unical.it.medicalcenterservice.model.UserProfile;
import ASDE2019.unical.it.medicalcenterservice.repositories.CommentRepo;
import ASDE2019.unical.it.medicalcenterservice.repositories.PostRepo;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserProfileRepo;
import ASDE2019.unical.it.medicalcenterservice.services.CommentService;
import ASDE2019.unical.it.medicalcenterservice.services.ResourceNotFoundException;

@RestController
public class CommentController {



    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private PostRepo postRepo;

    @Autowired
    private UserProfileRepo userProfileRepo;

    @Autowired
    private CommentService commentService;

    //show all related comments
    public Page<Comment> getAllCommentsByPostId(@PathVariable (value = "postId") Long postId, Pageable pageable) {
        return commentRepo.findByPostId(postId, pageable);
    }

    @PostMapping("/posts/{postId}/{userProfileId}/comments") //create comment
    public RestResponse<?> createComment(@PathVariable (value = "postId") Long postId,
                                      @Valid @RequestBody Comment comment, @PathVariable(value="userProfileId") Long userProfileId) {

        Optional<UserProfile> userProfile=userProfileRepo.findById(userProfileId);
        comment.setUserProfile(userProfile.get());
        try {
            return RestResponse.createSuccessResponse(commentService.saveComment(postId, comment));
        }
        catch(ResourceNotFoundException e)
        {
            return RestResponse.createFailureResponse(e.getMessage(),400);
        }

    }

    @PutMapping("/posts/{postId}/comments/{commentId}") //update comment
    public RestResponse<?> updateComment(@PathVariable (value = "postId") Long postId,
                                 @PathVariable (value = "commentId") Long commentId,
                                 @Valid @RequestBody Comment commentRequest) {
        if(!postRepo.existsById(postId)) {
            throw new ResourceNotFoundException("PostId " + postId + " not found");
        }
      try{
          return RestResponse.createSuccessResponse(commentService.editComment(commentId,commentRequest));
      }
      catch(ResourceNotFoundException e)
        {
            return RestResponse.createFailureResponse(e.getMessage(),400);
        }

    }

    @DeleteMapping("/posts/{postId}/comments/{commentId}") //delete comment
    public RestResponse<?> deleteComment(@PathVariable (value = "postId") Long postId,
                                           @PathVariable (value = "commentId") Long commentId) {
        if(!postRepo.existsById(postId)) {
            throw new ResourceNotFoundException("PostId " + postId + " not found");
        }

        try{
            return RestResponse.createSuccessResponse(commentService.deleteComment(commentId));
        }
        catch(ResourceNotFoundException e){
            return RestResponse.createFailureResponse(e.getMessage(),400);
        }
    }
}
