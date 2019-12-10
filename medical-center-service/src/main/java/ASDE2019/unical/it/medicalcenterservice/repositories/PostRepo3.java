package ASDE2019.unical.it.medicalcenterservice.repositories;

import ASDE2019.unical.it.medicalcenterservice.repositories.PostDTO;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PostRepo3 implements PostRepo2 {

    @PersistenceContext
    EntityManager entityManager;


    @Override
    public List<PostDTO> findByUserProfileId(Long userProfId){

        List<PostDTO> resultList= new ArrayList<>();
        Query query = entityManager.createNativeQuery("select p.id,p.title,p.content,p.contentUrl,u.id as userId,u.profile_Picture_Url from posts p,userprofile u where p.user_prof_id=u.id and p.user_prof_id=?","findAllDataMapping");
        query.setParameter(1, userProfId );
        resultList=query.getResultList();
        return resultList;




    }

}