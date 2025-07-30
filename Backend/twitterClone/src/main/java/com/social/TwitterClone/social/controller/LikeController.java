package com.social.TwitterClone.social.controller;

import com.social.TwitterClone.social.dto.LikeDto;
import com.social.TwitterClone.social.dto.mapper.LikeDtoMapper;
import com.social.TwitterClone.social.exception.TwitException;
import com.social.TwitterClone.social.exception.UserException;
import com.social.TwitterClone.social.model.Like;
import com.social.TwitterClone.social.model.User;
import com.social.TwitterClone.social.service.LikeService;
import com.social.TwitterClone.social.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {

    @Autowired
    private UserService userService;
    @Autowired
    private LikeService likeService;

    @PostMapping("/{twitId}/likes")
    public ResponseEntity<LikeDto> likeTwit(@PathVariable Long twitId,
                                            @RequestHeader("Authorization") String jwt) throws UserException, TwitException{
        User user = userService.findUserProfileByJwt(jwt);

        Like like = likeService.likeTwit(twitId,user);

        LikeDto likeDto = LikeDtoMapper.toLikeDto(like,user);

        return new ResponseEntity<LikeDto>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/twit/{twitId}")
    public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long twitId,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, TwitException{
        User user = userService.findUserProfileByJwt(jwt);

        List<Like> like = likeService.getAllLikes(twitId);

        List<LikeDto> likeDto = LikeDtoMapper.toLikeDtos(like,user);

        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
    }


}
