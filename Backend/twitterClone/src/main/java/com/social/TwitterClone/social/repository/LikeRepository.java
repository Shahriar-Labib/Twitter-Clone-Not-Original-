package com.social.TwitterClone.social.repository;

import com.social.TwitterClone.social.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<Like,Long> {

    @Query("SELECT l FROM Like l WHERE l.user.id=:userId AND l.twit.id=:twitId")
    public Like isLikeExist(@Param("userId") Long userId,@Param("twitId") Long twitId);

    @Query("SELECT l FROM Like l WHERE l.twit.id=:twitId")
    public List<Like> findByTwitId(@Param("twitId") Long twitId);
}
