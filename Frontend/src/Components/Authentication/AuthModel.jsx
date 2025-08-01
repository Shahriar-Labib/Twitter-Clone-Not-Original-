import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SigninForm } from './SigninForm';
import SignupForm from './SignupForm';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline:"none",
};

export default function AuthModel({open,handleClose}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (location.pathname === "/signup") {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
  ...style,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}>
  <h1 className='text-center font-bold text-3xl pb-10'>
    Create your account 
  </h1>

  <Box sx={{ width: '100%', maxWidth: 400 }}>
    {location.pathname === "/signup" ? <SignupForm /> : <SigninForm />}
  </Box>
  
  <h1 className='text-center py-5 font-semibold text-lg text-gray-500'>
    {location.pathname === "/signup" ? "Already have account" : "If you don't have account"}
  </h1>

  <Button
    fullWidth
    variant='outlined'
    onClick={handleNavigate}
    sx={{
      borderRadius: "29px",
      py: "15px",
      fontSize: '1rem',
      width: '100%',
      maxWidth: 400,
      boxSizing: 'border-box',
    }}
  >
    {location.pathname === "/signup" ? "SIGNIN" : "SIGNUP"}
  </Button>
  </Box>
      </Modal>
    </div>
  );
}