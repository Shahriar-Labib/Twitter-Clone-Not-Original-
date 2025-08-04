import { FIND_TWEET_BY_ID_FAILURE, FIND_TWEET_BY_ID_SUCCESS, GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_REQUEST, GET_ALL_TWEETS_SUCCESS, GET_USERS_TWEETS_FAILURE, GET_USERS_TWEETS_REQUEST, GET_USERS_TWEETS_SUCCESS, LIKE_TWEETS_FAILURE, LIKE_TWEETS_REQUEST, LIKE_TWEETS_SUCCESS, REPLY_TWEET_FAILURE, REPLY_TWEET_REQUEST, REPLY_TWEET_SUCCESS, RTWEET_FAILURE, RTWEET_REQUEST, RTWEET_SUCCESS, TWEET_CREATE_FAILURE, TWEET_CREATE_REQUEST, TWEET_CREATE_SUCCESS, TWEET_DELETE_FAILURE, TWEET_DELETE_SUCCESS, USER_LIKE_TWEETS_SUCCESS } from "./ActionType"
import { api } from "../../Config/api"

export const getAllTweets = () => async (dispatch) => {
    try {
        dispatch({type:GET_ALL_TWEETS_REQUEST})
        const {data} = await api.get("/api/twits/")
        console.log("get all tweets : ", data)
        dispatch({type:GET_ALL_TWEETS_SUCCESS,payload:data})
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:GET_ALL_TWEETS_FAILURE,payload:error.message})
        
    }
}

export const getUsersTweet = (userId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/user/${userId}`)
        console.log("get all tweets : ", data)
        dispatch({type:GET_USERS_TWEETS_SUCCESS,payload:data})
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:GET_USERS_TWEETS_FAILURE,payload:error.message})
        
    }
}


export const findTWitsByLikeContainUser = (userId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/user/${userId}/likes`)
        console.log("user like tweets : ", data)
        dispatch({type:USER_LIKE_TWEETS_SUCCESS,payload:data})
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:USER_LIKE_TWEETS_FAILURE,payload:error.message})
        
    }
}

export const findTwitsById = (twitId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/${twitId}`)
        console.log("find  tweets : ", data)
        dispatch({type:FIND_TWEET_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:FIND_TWEET_BY_ID_FAILURE,payload:error.message})
        
    }
}

export const createTwit = (tweetData) => async (dispatch) => {
    try {
        dispatch({type:TWEET_CREATE_REQUEST})
        const {data} = await api.post(`/api/twits/create`, tweetData)
        console.log("make tweets : ", data)
        dispatch({type:TWEET_CREATE_SUCCESS,payload:data})
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:TWEET_CREATE_FAILURE,payload:error.message})
        
    }
}

export const createTwitReply = (tweetData) => async (dispatch) => {
    try {
        dispatch({type:REPLY_TWEET_REQUEST})
        const {data} = await api.post(`/api/twits/reply`, tweetData)
        console.log("reply tweets : ", data)
        dispatch({type:REPLY_TWEET_SUCCESS,payload:data})
        // Refresh tweets after reply
        dispatch(getAllTweets())
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:REPLY_TWEET_FAILURE,payload:error.message})
        
    }
}


export const createReTweet = (twitId) => async (dispatch) => {
    try {
        dispatch({type:RTWEET_REQUEST})
        const {data} = await api.put(`/api/twits/${twitId}/retwit`)
        console.log("Retweets : ", data)
        dispatch({type:RTWEET_SUCCESS,payload:data})
        // Refresh tweets after retweet
        dispatch(getAllTweets())
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:RTWEET_FAILURE,payload:error.message})
        
    }
}

export const likeTweet = (twitId) => async (dispatch) => {
    try {
        dispatch({type:LIKE_TWEETS_REQUEST})
        const {data} = await api.post(`/api/${twitId}/likes`)
        console.log("like : ", data)
        dispatch({type:LIKE_TWEETS_SUCCESS,payload:data})
        // Refresh tweets after like
        dispatch(getAllTweets())
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:LIKE_TWEETS_FAILURE,payload:error.message})
        
    }
}

export const deleteTweet = (twitId) => async (dispatch) => {
    try {
        const {data} = await api.post(`/api/twits/${twitId}`)
        console.log("delete : ", data)
        dispatch({type:TWEET_DELETE_SUCCESS,payload:twitId})
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:TWEET_DELETE_FAILURE,payload:error.message})
        
    }
}



