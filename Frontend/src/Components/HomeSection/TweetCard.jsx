import React from 'react'
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import { Avatar, Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from './ReplyModal';

const TweetCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        console.log("delete tweet");
        handleClose();
    }

    const handleOpenReplyModel = () => {
        console.log("open model");
    }

    const handleCreateRetweet = () => {
        console.log("handle tweet");
    }

    const handleLikeTweet = () => {
        console.log("handle like tweet");
    }

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className='flex'>
            <Avatar
                onClick={() => navigate(`/profile/${6}`)}
                className='cursor-pointer'
                alt='username'
                src='https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp' />

            <div className='w-full pl-2'> {/* Added pl-2 for slight left padding */}
                <div className='flex justify-between items-center'>
                    <div className='flex cursor-pointer items-center space-x-2'>
                        <span className='font-semibold'>Just Checking</span>
                        <span className='text-gray-600'>@just checking . 2m</span>
                        <img className="ml-2 w-5 h-5" src="https://images.seeklogo.com/logo-png/39/1/google-verified-logo-png_seeklogo-392672.png" alt="" />
                    </div>

                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                            <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                        </Menu>
                    </div>
                </div>

                <div onClick={() => navigate(`/twit/${3}`)} className='cursor-pointer'>
                    <p className='mb-2 p-0'>
                        twitter clone - full stack project with spring boot and react
                    </p>
                    <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src="https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" alt="" />
                </div>
                <div className='py-5 flex flex-wrap justify-between items-center'>
                    <div className='space-x-3 flex items-center text-gray-600'>
                        <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                        <p>43</p>
                    </div>
                    <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                        <RepeatOnIcon 
                        onClick={handleCreateRetweet}
                        className='"cursor-pointer'
                        />

                        <p>54</p>

                    </div>

                      <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                        {true ? <FavoriteIcon 
                        onClick={handleLikeTweet}
                        className='"cursor-pointer'
                        /> : <FavoriteBorderIcon 
                        onClick={handleLikeTweet}
                        className='"cursor-pointer'
                        />}

                        <p>54</p>

                    </div>

                    <div className='space-x-3 flex items-center text-gray-600'>
                        <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                        <p>430</p>
                    </div>

                    <div className='space-x-3 flex items-center text-gray-600'>
                        <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                        <p>43</p>
                    </div>

                </div>
            </div>
            </div>
        <section>
            <ReplyModal />
        </section>
        </React.Fragment>
    )
}

export default TweetCard