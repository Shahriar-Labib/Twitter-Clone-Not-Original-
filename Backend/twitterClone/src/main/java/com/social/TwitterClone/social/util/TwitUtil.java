package com.social.TwitterClone.social.util;

import com.social.TwitterClone.social.model.Like;
import com.social.TwitterClone.social.model.Twit;
import com.social.TwitterClone.social.model.User;

public class TwitUtil {

    public final static boolean isLikeByReqUser(User reqUser, Twit twit)
    {
        for(Like like:twit.getLikes()){
            if(like.getUser().getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }

    public final static boolean isRetwitedByReqUser(User reqUser,Twit twit){
        for(User user:twit.getRetwitUser()){
            if(user.getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }
}
