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
                        <img className="ml-2 w-5 h-5" src="data:image/png;base64,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" alt="" />
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

                <div className='mt-2'>
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
    )
}

export default TweetCard