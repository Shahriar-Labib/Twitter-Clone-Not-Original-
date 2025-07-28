package com.social.TwitterClone.social.repository;

import com.social.TwitterClone.social.model.Twit;
import com.social.TwitterClone.social.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TwitRepository extends JpaRepository<Twit,Long> {

    List<Twit> findAllByIsTwitTrueOrderByCreatedAtDesc();

    List<Twit> findByRetwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user,Long userId);

    List<Twit> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("SELECT t FROM Twit t JOIN t.likes l WHERE l.user.id=:userId")
    List<Twit> findByLikesUser_Id(Long userId);



}
