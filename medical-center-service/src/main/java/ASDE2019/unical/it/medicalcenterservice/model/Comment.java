package ASDE2019.unical.it.medicalcenterservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode
@Table(name = "comments")
public class Comment {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    //comment id
	    private Long id;

	    @NotNull
	    @Lob
	    //comment text (large object for DB)
	    private String text;

	    @ManyToOne(fetch = FetchType.LAZY, optional = false)
	    @JoinColumn(name = "post_id", nullable = false)
	    @OnDelete(action = OnDeleteAction.CASCADE)
	    @JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
	    @JsonIdentityReference(alwaysAsId=true)
	    @JsonProperty("post_id")
	    //link to post to which this comment is related
	    private Post post;


	    @ManyToOne(fetch = FetchType.LAZY, optional = false)
	    @JoinColumn(name = "user_prof_id", nullable = false)
	    @OnDelete(action = OnDeleteAction.CASCADE)
	    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
	    @JsonIdentityReference(alwaysAsId=true)
	    @JsonProperty("user_prof_id")
	    //link to user's profile of the user, who added this comment
	    private UserProfile userProfile;


}
