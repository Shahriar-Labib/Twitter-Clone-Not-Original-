import { Spa } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import ImageIcon from '@mui/icons-material/Image';
import React, { useEffect, useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import * as Yup from 'yup'
import TweetCard from './TweetCard';
import { useDispatch, useSelector } from 'react-redux';
import { createTwit, getAllTweets } from '../Store/Twit/Action';
import store from '../Store/store';
import { uploadToCloudnary } from '../Utils/uploadToCloudnary';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage,setSelectedImage] = useState("")
    const dispatch = useDispatch();
    const {twit} = useSelector(store=>store)
    console.log("twits ",twit)

    // Debug: Check authentication status
    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        console.log("JWT Token:", jwt ? "Present" : "Missing");
        if (!jwt) {
            console.error("No JWT token found. User needs to login first.");
        }
    }, []);

    const handleSubmit = async (values,actions) => {
        try {
            await dispatch(createTwit(values))
            console.log("values = ",values)
            // Reset form after successful tweet
            formik.resetForm()
            setSelectedImage("")
            actions.resetForm()
            // Refresh tweets list
            dispatch(getAllTweets())
        } catch (error) {
            console.error("Failed to create tweet:", error)
        }
    }

    const handleSelectImage = async (event) => {
        try {
            setUploadingImage(true);
            const imgUrl = await uploadToCloudnary(event.target.files[0])
            formik.setFieldValue("image",imgUrl);
            setSelectedImage(imgUrl)
        } catch (error) {
            console.error("Image upload failed:", error);
            alert("Failed to upload image. Please try again.");
        } finally {
            setUploadingImage(false);
        }
    }

    useEffect(() => {
        dispatch(getAllTweets())
    },[twit.like,twit.retwit])

    const formik = useFormik({
        initialValues:{
            content:"",
            image:"",
            isTweet:true
        },
        onSubmit:handleSubmit,
        validationSchema,
    })

  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
        </section>
        
        {/* Debug Section */}
        <section className='bg-gray-100 p-4 rounded'>
            <h3 className='font-bold mb-2'>Debug Info:</h3>
            <p>JWT Token: {localStorage.getItem("jwt") ? "✅ Present" : "❌ Missing"}</p>
            <p>Tweets Count: {twit.twits?.length || 0}</p>
            <p>Loading: {twit.loading ? "✅ Yes" : "❌ No"}</p>
            <p>Error: {twit.error || "None"}</p>
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
                    <div>
                        {selectImage && <img src={selectImage} alt='' />}
                    </div>
                </div>
            </div>

        </section>

        <section >
            {twit.twits?.map((item) =><TweetCard key={item.id} item={item}/>)}
        </section>
    </div>
  )
}

export default HomeSection
