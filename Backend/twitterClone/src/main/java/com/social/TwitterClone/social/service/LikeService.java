package com.social.TwitterClone.social.service;

import com.social.TwitterClone.social.exception.TwitException;
import com.social.TwitterClone.social.exception.UserException;
import com.social.TwitterClone.social.model.Like;
import com.social.TwitterClone.social.model.User;

import java.util.List;

public interface LikeService {

    public Like likeTwit(Long twitId, User user) throws UserException, TwitException;

    public List<Like> getAllLikes(Long twitId) throws TwitException;

}
