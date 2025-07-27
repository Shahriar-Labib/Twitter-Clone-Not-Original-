import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function SubscriptionModal({handleClose,open}) {
  

  const [plan, setPlan] = React.useState("Annually");

  const features = [
    "Prioritized ranking in conversations and search",
    "See approximately twice as many tweets between ads in your For You and Following timelines",
    "Add bold and italic text in your tweets",
    "Post longer videos up to 60 minutes in length",
    "Upload 1080p video",
    "All the existing Blue features, including Edit Tweet, Bookmark folders, and early access to new features"
  ];

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          {/* Close button */}
          <div className="flex justify-end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              {/* Banner */}
              <div className="bg-slate-200 shadow-lg p-5 rounded-md flex items-center justify-between">
                <h1 className="text-md pr-5 leading-relaxed">
                  Blue subscribers with a verified phone number will get a blue checkmark once approved.
                </h1>
                <img
                  className="w-20 h-20"
                  src="https://images.seeklogo.com/logo-png/39/1/google-verified-logo-png_seeklogo-392672.png"
                  alt="verified badge"
                />
              </div>

              {/* Plan Toggle */}
              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-500">
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${plan === "Annually" ? "text-black font-semibold" : "text-gray-400"} cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("Monthly")}
                  className={`${plan === "Monthly" ? "text-black font-semibold" : "text-gray-400"} cursor-pointer`}
                >
                  Monthly
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((item, index) => (
                  <div className="flex items-center space-x-3" key={index}>
                    <FiberManualRecordIcon sx={{ fontSize: '8px' }} />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                <span className='line-through italic'>
                    ৳ 9940.00
                </span>
                <span className='px-5 italic'>৳ 5400.00/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
