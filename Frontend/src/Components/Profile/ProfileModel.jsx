import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';

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

export default function ProfileModel({open,handleClose}) {
  const handleSubmit = (values) => {
    console.log("form submitted", values);
  };

 // const [open, setOpen] = React.useState(false);
 
  const [uploading, setUploading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },
    onSubmit: handleSubmit
  });

  const handleImageChange = (event) => {
    setUploading(true);
    const { name } = event.target;
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false);
  };

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label='delete'>
                  <CloseIcon />
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type='submit'>Save</Button>
            </div>

            <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <React.Fragment>

                {/* Banner with overlapping Avatar */}
                <div className='w-full relative'>
                  {/* Background Image */}
                  <div className='relative h-[12rem]'>
                    <img
                      className='w-full h-full object-cover object-center'
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cKsJP9qnawp05ofTbYbDnomqwQ3EFYK69g&s"
                      alt="banner"
                    />
                    <input
                      type="file"
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                      name="backgroundImage"
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* Avatar */}
                  <div className='absolute left-6 -bottom-[3.5rem]'>
                    <Avatar
                      sx={{
                        width: '8rem',
                        height: '8rem',
                        border: '4px solid white',
                      }}
                      src='https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp'
                    />

                    <input name='image' onChange={handleImageChange} type="file" className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer' />

                  </div>
                </div>

                {/* Form fields with spacing below avatar */}
<div className='mt-20 px-2'>
  <div className='mb-4'>
    <TextField
      fullWidth
      id="fullName"
      name='fullName'
      label="Full Name"
      value={formik.values.fullName}
      onChange={formik.handleChange}
      error={formik.touched.fullName && Boolean(formik.errors.fullName)}
      helperText={formik.touched.fullName && formik.errors.fullName}
    />
  </div>

  <div className='mb-4'>
    <TextField
      multiline
      rows={4}
      fullWidth
      id="bio"
      name='bio'
      label="Bio"
      value={formik.values.bio}
      onChange={formik.handleChange}
      error={formik.touched.bio && Boolean(formik.errors.bio)}
      helperText={formik.touched.bio && formik.errors.bio}
    />
  </div>

  <div className='mb-4'>
    <TextField
      fullWidth
      id="website"
      name='website'
      label="Website"
      value={formik.values.website}
      onChange={formik.handleChange}
      error={formik.touched.website && Boolean(formik.errors.website)}
      helperText={formik.touched.website && formik.errors.website}
    />
  </div>

  <div className='mb-4'>
    <TextField
      fullWidth
      id="location"
      name='location'
      label="Location"
      value={formik.values.location}
      onChange={formik.handleChange}
      error={formik.touched.location && Boolean(formik.errors.location)}
      helperText={formik.touched.location && formik.errors.location}
    />
  </div>

  <div className='my-3'>
    <p className='text-lg'>Birth date · Edit</p>
    <p className='text-2xl'>July 12, 2004</p>
  </div>

  <p className='py-3 text-lg'>Edit Professional Profile</p>
</div>

              </React.Fragment>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
