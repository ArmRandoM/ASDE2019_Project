package ASDE2019.unical.it.medicalcenterservice.services;

import org.springframework.http.ResponseEntity;

import ASDE2019.unical.it.medicalcenterservice.model.Post;

public interface PostService {
	
	Post AddPost(Post post, Long UserProfID);
	Post EditPost(Long postID, Post post);
	
	ResponseEntity<?> deletePost(Long PostID);

}
