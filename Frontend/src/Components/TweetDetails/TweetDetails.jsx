import React, { useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findTwitsById } from '../Store/Twit/Action';
import store from '../Store/store';
export const TweetDetails = () => {

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const dispatch = useDispatch();

    const {id} = useParams()
    const {twit} = useSelector(store=>store)

    useEffect(() => {
        if(id){
            dispatch(findTwitsById(id))
        }
    },[])
    return (
        <React.Fragment>

            <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-95 px-4 py-5">
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
                <h1 className="text-xl font-bold opacity-90 ml-5">Tweet </h1>
            </section>

            <section>
            <TweetCard item={twit.twit}/>
            <Divider sx={{margin:"2rem 0rem"}} />
            </section>

            <section>
                {twit.twit.replyTweet.map((items) => <TweetCard item={item} />)}
            </section>



        </React.Fragment>
    )
}
