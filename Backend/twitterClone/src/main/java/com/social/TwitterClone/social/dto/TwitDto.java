package com.social.TwitterClone.social.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class TwitDto {

    private Long id;

    private String content;

    private String image;

    private String video;

    private UserDto user;

    private LocalDateTime createdAt;

    private int totalLikes;

    private int totalReplies;

    private int totalRetweets;

    private boolean isLiked;

    private boolean isRetwit;



    private List<Long> rettwitUserId;
    private List<TwitDto> replyTwits;
}
