package com.social.TwitterClone.social.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtProvider {

    SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    public String generateToken (Authentication auth)
    {
        String jwt = Jwts.builder().issuedAt(new Date()).expiration(new Date(System.currentTimeMillis() + 86400000))
                .claim("email",auth.getName()).claim("authorities",auth.getAuthorities().toString())
                .signWith(key).compact();
        return jwt;
    }

    public String getEmailFromToken (String jwt) {
        jwt = jwt.substring(7);
        Claims claims = Jwts.parser().verifyWith(key).build().parseSignedClaims(jwt).getPayload();
        String email = String.valueOf(claims.get("email"));
        return email;

    }
}
