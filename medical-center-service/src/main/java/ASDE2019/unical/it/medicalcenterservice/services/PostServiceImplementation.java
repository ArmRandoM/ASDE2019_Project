package ASDE2019.unical.it.medicalcenterservice.services;

import ASDE2019.unical.it.medicalcenterservice.repositories.UserProfileRepo;
import ASDE2019.unical.it.medicalcenterservice.repositories.PostRepo;
import ASDE2019.unical.it.medicalcenterservice.model.Post;
import ASDE2019.unical.it.medicalcenterservice.model.UserProfile;
import ASDE2019.unical.it.medicalcenterservice.services.ResourceNotFoundException;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class PostServiceImplementation implements PostService {
	
	@Autowired
    UserProfileRepo userProfileRepository;

    @Autowired
    PostRepo postRepository;

    @Override
    public Post AddPost(Post post,Long UserProfId){

        Optional<UserProfile> userProfile = userProfileRepository.findById(UserProfId);
        if(userProfile != null) {
            post.setUserProfile(userProfile.get());
            return post;
        }
        else{throw new ResourceNotFoundException("User Profile Is Not Found");
        }
    }

    @Override
    public Post EditPost(Long postId,Post post){

        return postRepository.findById(postId).map(Updatedpost -> {
            Updatedpost.setTitle(post.getTitle());
            Updatedpost.setContent(post.getContent());
            Updatedpost.setContent(post.getContentUrl());
            return postRepository.save(Updatedpost);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));

    }

    @Override
    public ResponseEntity<?> deletePost(Long postId){
        return postRepository.findById(postId).map(post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }
}
