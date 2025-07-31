import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

// const validationSchema = Yup.object().shape({
    
// })
export const SigninForm = () => {

    const formik = useFormik({
        initialValues:{
            email:"",
            password: "",
        },
        validationSchema,
        onSubmit:(values) => {
            console.log("form value ",values)
        }
    })


  return (
    <form action="">

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label = "Email"
                name='email'
                variant='outline'
                size='large'
                // value={}
                 />
            
            </Grid>
        </Grid>


    </form>
  )
}
