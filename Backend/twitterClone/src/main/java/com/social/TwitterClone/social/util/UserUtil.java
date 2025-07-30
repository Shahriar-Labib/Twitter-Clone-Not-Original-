package com.social.TwitterClone.social.util;

import com.social.TwitterClone.social.model.User;

public class UserUtil {

    public static final boolean isReqUser(User reqUser,User user2){
        return reqUser.getId().equals(user2.getId());
    }

    public static final boolean isFollwedByReqUser(User reqUser,User user2){
        return reqUser.getFollowing().contains(user2);
    }
}
