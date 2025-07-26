import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4,
};

export default function ReplyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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

                
                
            </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}