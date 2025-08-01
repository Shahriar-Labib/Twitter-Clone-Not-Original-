package com.social.TwitterClone.social.controller;

import com.social.TwitterClone.social.config.JwtProvider;
import com.social.TwitterClone.social.exception.UserException;
import com.social.TwitterClone.social.model.User;
import com.social.TwitterClone.social.model.Varification;
import com.social.TwitterClone.social.repository.UserRepository;
import com.social.TwitterClone.social.response.AuthResponse;
import com.social.TwitterClone.social.service.CustomUserDetailsServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CustomUserDetailsServiceImplementation customUserDetails;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {

        String email = user.getEmail();
        String password = user.getPassword();
        String fullName = user.getFullName();
        String birthDate = user.getBirthDate();

        User isEmailExist = userRepository.findByEmail(email);

        if(isEmailExist != null)
        {
            throw new UserException("Email is already used with another account");
        }

        User createUser = new User();
        createUser.setEmail(email);
        createUser.setFullName(fullName);
        createUser.setPassword(passwordEncoder.encode(password));
        createUser.setBirthDate(birthDate);
        createUser.setVerification(new Varification());

        User savedUser = userRepository.save(createUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(token,true);

        return new ResponseEntity<AuthResponse>(response, HttpStatus.CREATED);



    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody User user) {
        String username = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = authenticate(username,password);
        String token = jwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(token,true);

        return new ResponseEntity<AuthResponse>(response, HttpStatus.ACCEPTED);
    }

    private Authentication authenticate(String username,String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        if(userDetails == null){
            throw new BadCredentialsException("Invalid username");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username and password");
        }
        return new UsernamePasswordAuthenticationToken(username,null,userDetails.getAuthorities());

    }



}
