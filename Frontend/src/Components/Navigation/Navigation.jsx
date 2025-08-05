import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, MenuItem, Menu } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { navigationMenu } from './NavigationMenu';
import { useDispatch, useSelector } from 'react-redux';
import store from '../Store/store';
import { logout } from '../Store/Auth/Action';
import { UPDATE_USER_PROFILE } from '../Store/Auth/ActionType';

const Navigation = () => {
  const {auth} = useSelector(store=>store)
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  // Debug logging
  console.log("Navigation - auth state:", auth);
  console.log("Navigation - user data:", auth.user);
  console.log("Navigation - user fullName:", auth.user?.fullName);
  console.log("Navigation - user email:", auth.user?.email);
  console.log("Navigation - user object keys:", auth.user ? Object.keys(auth.user) : "No user object");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
   console.log("logout");
   handleClose()
   dispatch(logout());
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between px-4'>
      {/* Logo */}
      <div>
        <div className='py-5'>
          <svg
            height="30"
            width="30"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-jwli3a r-4qtqp9 r-yyyyoo r-lapphf r-1777fci r-dmczs r-494qqr r-bnwqim r-1plcrui"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l9.966 15.644zm-5.82-8.704-.685.847 6.925 9.109h-1.548zm-2.894-2.664-.747.956 6.926 9.109h-1.548z" />
            </g>
          </svg>
        </div>

        {/* Navigation Menu */}
        <div className='space-y-6'>
          {navigationMenu.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={() =>
                  item.title === 'Profile'
                    ? navigate(`/profile/${auth.user?.id}`)
                    : navigate(item.path)
                }
                className='cursor-pointer flex space-x-3 items-center hover:bg-gray-100 p-2 rounded'
              >
                <Icon />
                <p className='text-xl'>{item.title}</p>
              </div>
            );
          })}
        </div>

        {/* Tweet Button */}
        <div className='py-10'>
          <Button
            sx={{
              width: '100%',
              borderRadius: '29px',
              py: '15px',
              bgcolor: '#1d9bf0',
              textTransform: 'none',
              fontWeight: 'bold'
            }}
            variant='contained'
          >
            Tweet
          </Button>
        </div>
      </div>

      {/* User Info and Menu */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Avatar alt='username' src='https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp'/>
          <div>
            <p className="font-semibold">{auth.user?.fullName || auth.user?.email?.split('@')[0] || "Unknown User"}</p>
            <p className="text-sm text-gray-600">{auth.user?.email || "No email"}</p>
           
            {auth.error && (
              <p className="text-xs text-red-500">Error: {auth.error}</p>
            )}
          </div>
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
            
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            {/* <MenuItem onClick={() => {
              // Temporary: Update user's fullName
              const updatedUser = { ...auth.user, fullName: 'Jenny' };
              dispatch({ type: UPDATE_USER_PROFILE, payload: updatedUser });
            }}>Update Name (Test)</MenuItem> */}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
