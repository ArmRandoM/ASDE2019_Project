package ASDE2019.unical.it.medicalcenterservice.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ASDE2019.unical.it.medicalcenterservice.repositories.PostRepo;
import ASDE2019.unical.it.medicalcenterservice.repositories.UserProfileRepo;
import ASDE2019.unical.it.medicalcenterservice.services.PostService;
import ASDE2019.unical.it.medicalcenterservice.services.ResourceNotFoundException;
import ASDE2019.unical.it.medicalcenterservice.RestResponse;
import ASDE2019.unical.it.medicalcenterservice.model.Post;

public class PostController {
	@Autowired
    PostRepo postRepo;

    @Autowired
    UserProfileRepo userProfileRepo;

    @Autowired
    PostService postService;

    @GetMapping("/posts") //comment creation
    public Page<Post> getAllPosts(Pageable pageable) {
        return postRepo.findAll(pageable);
    }

    @PostMapping("/posts/{userprofileid}")
    public RestResponse createPost(@Valid @RequestBody Post post, @PathVariable Long userprofileid) {
            try {
                postService.AddPost(post, userprofileid);
                return RestResponse.createSuccessResponse(postRepo.save(post));
            }

        catch (ResourceNotFoundException e){
                return RestResponse.createFailureResponse(e.getMessage(),400);
        }
    }

    @PutMapping("/posts/{postId}")
    public RestResponse<?> updatePost(@PathVariable Long postId, @Valid @RequestBody Post postRequest) {

        try{
            return RestResponse.createSuccessResponse(postService.EditPost(postId,postRequest));

        }catch (ResourceNotFoundException e){
            return RestResponse.createFailureResponse(e.getMessage(),400);
        }
    }


    @DeleteMapping("/posts/{postId}")
    public RestResponse<?> deletePostOfUser(@PathVariable Long postId) {


        try{return RestResponse.createSuccessResponse(postService.deletePost(postId)); }
        catch(ResourceNotFoundException e){
            return RestResponse.createFailureResponse(e.getMessage(),400);
        }
    }

}
