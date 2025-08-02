import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ImageIcon from '@mui/icons-material/Image';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createTwitReply } from '../Store/Twit/Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 3,
  outline: 'none',
  borderRadius: 4,
};

export default function ReplyModal({handleClose,open,item}) {
  
  const handleOpen = () => setOpen(true);
  
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectImage, setSelectedImage] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(createTwitReply(values))
    handleClose()
    console.log("Handle submit: ", values)
  }

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: item?.id,
    },
    onSubmit: handleSubmit
  })

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl)
    setUploadingImage(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Header Section */}
          <div className='flex items-start'>
            <Avatar
              onClick={() => navigate(`/profile/${item?.user.id}`)}
              className='cursor-pointer'
              alt='username'
              src='https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp'
            />
            <div className='w-full pl-3'>
              <div className='flex items-center space-x-2'>
                <span className='font-semibold text-sm'>Code With Zosh</span>
                <span className='text-gray-500 text-sm'>@codewithzosh · 2m</span>
                <img
                  className="ml-1 w-4 h-4"
                  src="https://images.seeklogo.com/logo-png/39/1/google-verified-logo-png_seeklogo-392672.png"
                  alt=""
                />
              </div>
              <p className='text-sm mt-1'>
                twitter clone - full stack project with spring boot and react
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className='flex mt-6'>
            <Avatar
              alt='username'
              src='https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp'
            />
            <form onSubmit={formik.handleSubmit} className='w-full ml-3'>
              <input
                type="text"
                name='content'
                placeholder='What is happening'
                className='w-full text-xl border-none outline-none bg-transparent placeholder-gray-500'
                {...formik.getFieldProps("content")}
              />
              {formik.errors.content && formik.touched.content && (
                <span className='text-red-500'>{formik.errors.content}</span>
              )}

              {/* Icons and Button */}
              <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center space-x-4'>
                  <label htmlFor="imageFile" className='cursor-pointer'>
                    <ImageIcon className='text-[#1d9bf0]' />
                    <input
                      type="file"
                      name='imageFile'
                      id="imageFile"
                      className='hidden'
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className='text-[#1d9bf0]' />
                  <LocalOfferIcon className='text-[#1d9bf0]' />
                </div>

                <Button
                  variant='contained'
                  type='submit'
                  sx={{
                    borderRadius: '9999px',
                    px: 3,
                    py: 1,
                    bgcolor: '#1d9bf0',
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Tweet
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
