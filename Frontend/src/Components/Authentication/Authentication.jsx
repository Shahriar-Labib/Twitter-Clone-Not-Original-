import { Button } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import AuthModel from './AuthModel';

const Authentication = () => {

  const [openAuthModel,setOpenAuthModel] = useState(false);

  const handleOpenAuthModel = () => setOpenAuthModel(true);

  const handleCloseAuthModel = () => setOpenAuthModel(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
      {/* Left side: Image and Logo */}
      <div className="relative w-full h-screen">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Centered X Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1134px-X_logo_2023.svg.png"
            alt="X logo"
            className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] object-contain"
          />
        </div>
      </div>

      {/* Right side: Login/Signup form */}
      <div className="flex flex-col justify-center pl-6 md:pl-24 pr-6">
        <h1 className="font-bold text-5xl md:text-7xl mb-8">Happening Now</h1>
        <h2 className="font-bold text-2xl md:text-3xl mb-12">Join Twitter Today</h2>

        <div className="w-full max-w-md">
          <GoogleLogin width={330} />

          <p className="py-5">OR</p>

          <Button onClick={handleOpenAuthModel}
            variant="contained"
            fullWidth
            sx={{
              borderRadius: '29px',
              py: '10px',
              mb: 2,
            }}
          >
            Create Account
          </Button>

          <p className="text-sm mb-10">
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
          </p>

          <h3 className="font-bold text-xl mb-5">Already Have Account?</h3>

          <Button onClick={handleOpenAuthModel}
            variant="outlined"
            size="large"
            fullWidth
            sx={{
              borderRadius: '29px',
              py: '10px',
            }}
          >
            Login
          </Button>
        </div>
      </div>

      <AuthModel open={openAuthModel} handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default Authentication;
