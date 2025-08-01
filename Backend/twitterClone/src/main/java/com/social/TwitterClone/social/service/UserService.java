package com.social.TwitterClone.social.service;

import com.social.TwitterClone.social.exception.UserException;
import com.social.TwitterClone.social.model.User;

import java.util.List;

public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;

    public User updateUserService(Long userId,User user) throws UserException;

    public User followUser(Long userId,User user) throws UserException;

    public List<User> searchUser(String query);
}
