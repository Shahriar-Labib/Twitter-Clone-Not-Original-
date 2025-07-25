import { Spa } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import ImageIcon from '@mui/icons-material/Image';
import React, { useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import * as Yup from 'yup'
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage,setSelectedImage] = useState(false)
    const handleSubmit = (values) => {
        console.log("values = ",values)
    }

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image",imgUrl);
        setSelectedImage(imgUrl)
        setUploadingImage(false);
    }

    const formik = useFormik({
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit,
        validationSchema,
    })

  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
        </section>
        <section className='pb-10 '>
            <div className='felx space-x-5'>
                <Avatar alt='username' src='https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp' />
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" name='content' 
                            placeholder='what is happening' 
                            className={'border-none outline-none text-xl bg-transparent'}
                            {...formik.getFieldProps("content")} />
                            {formik.errors.content && formik.touched.content && (
                                <span className='text-red-500'>{formik.errors.content}</span>
                            )}
                        
                        </div>

                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex space-x-5 items-center'>
                               <label htmlFor="imageFile" className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                 <ImageIcon className='text-[#1d9bf0]' />
                                <input type="file" 
                                        name='imageFile' 
                                        id="imageFile" 
                                        className='hidden' 
                                        onChange={handleSelectImage}  />
                               </label>
                               <FmdGoodIcon className='text-[#1d9bf0]' />
                               <LocalOfferIcon className='text-[#1d9bf0]' />

                            </div>

                            <div>
                                <Button variant='contained'
                                type='submit'
                                 sx={{
                                width: '100%',
                                borderRadius: '20px',
                                py: '8px',
                                px:"20px",
                                bgcolor: '#1d9bf0',
                                textTransform: 'none',
                                fontWeight: 'bold'

                                }}>Tweet
                                </Button>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>

        </section>

        <section >
            {[1,1,1,1].map((item) =><TweetCard />)}
        </section>
    </div>
  )
}

export default HomeSection
