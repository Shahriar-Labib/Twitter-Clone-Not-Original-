import React, { useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TabContext, TabList,TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModel from './ProfileModel';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../Store/Auth/Action';
import store from '../Store/store';

const Profile = () => {

    const [tabValue,setTabValue] = useState("1");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openProfileModel,setOpenProfileModal] = useState(false);
    const {auth} = useSelector(store => store)

    const handleOpenProfileModel = () => setOpenProfileModal(true)
    const handleClose = () => setOpenProfileModal(false)

    // Refresh user profile data when component mounts or auth changes
    useEffect(() => {
        if (auth.jwt) {
            console.log("Profile - Refreshing user profile data");
            dispatch(getUserProfile(auth.jwt));
        }
    }, [dispatch, auth.jwt]);

    // Debug: Log when auth user data changes
    useEffect(() => {
        console.log("Profile - Auth user data changed:", auth.user);
    }, [auth.user]);

    const handleBack = () => navigate(-1);

   

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
                <h1 className="text-xl font-bold opacity-90 ml-5">
                   {auth.user?.fullName}
                    
                    
                    
                    </h1>
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
                        alt={auth.user?.fullName || "User"}
                        src={auth.user?.image || "https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp"}
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
                        <h1 className="font-bold text-lg">{auth.user?.fullName || "User"}</h1>
                        {auth.user?.verified && (
                            <img
                                className="ml-2 w-5 h-5"
                                src="https://images.seeklogo.com/logo-png/39/1/google-verified-logo-png_seeklogo-392672.png"
                                alt="verified"
                            />
                        )}
                    </div>

                    <h1 className="text-gray-500">
                        
                        @{auth.user?.email ? auth.user.email.split("@")[0] : "user"}
                        
                        
                        </h1>

                    {/* Bio */}
                    <p className="mt-2 text-left">
                        {auth.user?.bio || "No bio available"}
                        </p>

                    {/* Info Row */}
                    <div className="py-2 flex space-x-5 text-gray-500">
                        <div className="flex items-center">
                            <BusinessCenterIcon fontSize="small" />
                            <p className="ml-2">{auth.user?.website || "Education"}</p>
                        </div>
                        <div className="flex items-center">
                            <LocationOnIcon fontSize="small" />
                            <p className="ml-2">{auth.user?.location || "Location"}</p>
                        </div>
                        <div className="flex items-center">
                            <CalendarMonthIcon fontSize="small" />
                            <p className="ml-2">Joined July 2025</p>
                        </div>
                    </div>

                    {/* Follow Counts */}
                    <div className="flex items-center space-x-5 font-semibold mt-1">
                        <div className="flex items-center space-x-1">
                            <span>{auth.user?.followings?.length || 0}</span>
                            <span className="text-gray-500">Following</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>{auth.user?.followers?.length || 0}</span>
                            <span className="text-gray-500">Followers</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
               <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} 
          aria-label="lab API tabs example">
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

            <section>
                <ProfileModel handleClose={handleClose} open={openProfileModel} />
            </section>


        </div>
    );
};

export default Profile;
