package com.social.TwitterClone.social.controller;

import com.social.TwitterClone.social.dto.TwitDto;
import com.social.TwitterClone.social.dto.mapper.TwitDtoMapper;
import com.social.TwitterClone.social.exception.TwitException;
import com.social.TwitterClone.social.exception.UserException;
import com.social.TwitterClone.social.model.Twit;
import com.social.TwitterClone.social.model.User;
import com.social.TwitterClone.social.request.TwitReplyRequest;
import com.social.TwitterClone.social.response.ApiResponse;
import com.social.TwitterClone.social.service.TwitService;
import com.social.TwitterClone.social.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/twits")
public class TwitController {

    @Autowired
    private TwitService twitService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<TwitDto> createTwit(@RequestBody Twit req,
                                              @RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.createTwit(req,user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.CREATED);
    }

    @PostMapping("/reply")
    public ResponseEntity<TwitDto> replyTwit(@RequestBody TwitReplyRequest req,
                                              @RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.createdReply(req,user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.CREATED);
    }

    @PutMapping("/{twitId}/retwit")
    public ResponseEntity<TwitDto> retwit(@PathVariable Long twitId,
                                             @RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.retwit(twitId,user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @GetMapping("/{twitId}")
    public ResponseEntity<TwitDto> findTwitById(@PathVariable Long twitId,
                                          @RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        Twit twit = twitService.findById(twitId);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @DeleteMapping("/{twitId}")
    public ResponseEntity<ApiResponse> deleteTwit(@PathVariable Long twitId,
                                                @RequestHeader("Authorization") String jwt) throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
         twitService.deleteTwitById(twitId,user.getId());

        ApiResponse response = new ApiResponse();
        response.setMessage("Twit deleted successfully");
        response.setStatus(true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<TwitDto>> getAllTwits(@RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        List<Twit> twit = twitService.findAllTwit();

        List<TwitDto> twitDto = TwitDtoMapper.toTwitDtos(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TwitDto>> getUserAllTwits(@PathVariable Long userId,@RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        List<Twit> twit = twitService.getUserTwit(user);

        List<TwitDto> twitDto = TwitDtoMapper.toTwitDtos(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}/likes")
    public ResponseEntity<List<TwitDto>> findTwitByLikesContainsUser(@PathVariable Long userId,@RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);

        List<Twit> twit = twitService.findByLikesContainsUser(user);

        List<TwitDto> twitDto = TwitDtoMapper.toTwitDtos(twit,user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }







}
