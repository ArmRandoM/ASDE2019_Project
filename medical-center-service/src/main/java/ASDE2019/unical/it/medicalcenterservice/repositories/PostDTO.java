package ASDE2019.unical.it.medicalcenterservice.repositories;

	
	import lombok.AllArgsConstructor;
	import lombok.Data;
	import lombok.EqualsAndHashCode;
	import lombok.NoArgsConstructor;


	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@EqualsAndHashCode
	public class PostDTO {

	    Long postId;
	    String title;
	    String content;
	    String contentUrl;
	    Long userProfID;
	    String profilePictureURL;


}
