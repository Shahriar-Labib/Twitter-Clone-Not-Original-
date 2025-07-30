package com.social.TwitterClone.social.controller;

import com.social.TwitterClone.social.dto.UserDto;
import com.social.TwitterClone.social.dto.mapper.UserDtoMapper;
import com.social.TwitterClone.social.exception.UserException;
import com.social.TwitterClone.social.model.User;
import com.social.TwitterClone.social.service.UserService;
import com.social.TwitterClone.social.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<UserDto> getUserById(@RequestHeader("Authorization") String jwt) throws UserException{
        User user = userService.findUserProfileByJwt(jwt);
        UserDto userDto = UserDtoMapper.toUserDto(user);
        userDto.setReq_user(true);
        return new ResponseEntity<UserDto>(userDto, HttpStatus.ACCEPTED);

    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long userId,
            @RequestHeader("Authorization") String jwt) throws UserException{
        User reqUser = userService.findUserProfileByJwt(jwt);

        User user = userService.findUserById(userId);

        UserDto userDto = UserDtoMapper.toUserDto(user);
        userDto.setReq_user(UserUtil.isReqUser(reqUser,user));
        userDto.setFollowed(UserUtil.isFollwedByReqUser(reqUser,user));
        return new ResponseEntity<UserDto>(userDto, HttpStatus.ACCEPTED);
    }

    @GetMapping("/search")
    public ResponseEntity<List<UserDto>> searchUser(@RequestParam String query,
                                                    @RequestHeader("Authorization") String jwt) throws UserException{
        User reqUser = userService.findUserProfileByJwt(jwt);

        List<User> user = userService.searchUser(query);

        List<UserDto> userDto = UserDtoMapper.toUserDtos(user);
        return new ResponseEntity<>(userDto, HttpStatus.ACCEPTED);
    }

    @PutMapping("/update")
    public ResponseEntity<UserDto> searchUser(@RequestBody User req,
                                                    @RequestHeader("Authorization") String jwt) throws UserException{
        User reqUser = userService.findUserProfileByJwt(jwt);

        User user = userService.updateUserService(reqUser.getId(),reqUser);

        UserDto userDto = UserDtoMapper.toUserDto(user);
        return new ResponseEntity<>(userDto, HttpStatus.ACCEPTED);
    }

    @PutMapping("/{userId}/follow")
    public ResponseEntity<UserDto> searchUser(@PathVariable Long userId,
                                              @RequestHeader("Authorization") String jwt) throws UserException{
        User reqUser = userService.findUserProfileByJwt(jwt);

        User user = userService.followUser(userId,reqUser);

        UserDto userDto = UserDtoMapper.toUserDto(user);
        userDto.setFollowed(UserUtil.isFollwedByReqUser(reqUser,user));

        return new ResponseEntity<>(userDto, HttpStatus.ACCEPTED);
    }




}
