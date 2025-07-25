import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TabContext, TabList,TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {

    const [tabValue,setTabValue] = useState("1");
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model");
    };

    const handleFollowUser = () => {
        console.log("follow user");
    };

    const handleTabChange = (event,newValue) => {
        setTabValue(newValue)

        if(newValue === 4){
            console.log("like twit")
        }
        else if(newValue === 1)
        {
            console.log("twit user")
        }
        
    
    }


    return (
        <div>
            {/* Header */}
            <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-95 px-4 py-5">
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
                <h1 className="text-xl font-bold opacity-90 ml-5">Just Checking</h1>
            </section>

            {/* Banner */}
            <section>
                <img
                    className="w-full h-[15rem] object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCu2Ik6fMHcHwERMUDK8pP5s-2MvesAizEvw&s"
                    alt="banner"
                />
            </section>

            {/* Avatar & Button */}
            <section className="px-4">
                <div className="flex justify-between items-start mt-5 h-[5rem]">
                    <Avatar
                        className="transform -translate-y-24"
                        alt="just checking"
                        src="https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp"
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ? (
                        <Button
                            className="rounded-full"
                            variant="contained"
                            sx={{ borderRadius: "20px" }}
                            onClick={handleOpenProfileModel}
                        >
                            Edit Profile
                        </Button>
                    ) : (
                        <Button
                            className="rounded-full"
                            variant="contained"
                            sx={{ borderRadius: "20px" }}
                            onClick={handleFollowUser}
                        >
                            {true ? "Follow" : "Unfollow"}
                        </Button>
                    )}
                </div>

                {/* Profile Info */}
                <div className="flex flex-col items-start w-full max-w-[600px]">
                    {/* Name & Handle */}
                    <div className="flex items-center">
                        <h1 className="font-bold text-lg">Just Checking</h1>
                        {true && (
                            <img
                                className="ml-2 w-5 h-5"
                                src="https://images.seeklogo.com/logo-png/39/1/google-verified-logo-png_seeklogo-392672.png"
                                alt="verified"
                            />
                        )}
                    </div>

                    <h1 className="text-gray-500">@justChecking</h1>

                    {/* Bio */}
                    <p className="mt-2 text-left">here this is just in development so just checking</p>

                    {/* Info Row */}
                    <div className="py-2 flex space-x-5 text-gray-500">
                        <div className="flex items-center">
                            <BusinessCenterIcon fontSize="small" />
                            <p className="ml-2">Education</p>
                        </div>
                        <div className="flex items-center">
                            <LocationOnIcon fontSize="small" />
                            <p className="ml-2">Bangladesh</p>
                        </div>
                        <div className="flex items-center">
                            <CalendarMonthIcon fontSize="small" />
                            <p className="ml-2">Joined July 2025</p>
                        </div>
                    </div>

                    {/* Follow Counts */}
                    <div className="flex items-center space-x-5 font-semibold mt-1">
                        <div className="flex items-center space-x-1">
                            <span>190</span>
                            <span className="text-gray-500">Following</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>590</span>
                            <span className="text-gray-500">Followers</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
               <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{[1,1,1].map((item) => <TweetCard />)}</TabPanel>
        <TabPanel value="2">Users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
            </section>
        </div>
    );
};

export default Profile;
