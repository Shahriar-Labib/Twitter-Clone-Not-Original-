import { Button, Grid, InputLabel, MenuItem, TextField,Select } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required")
});

 const currentYear = new Date().getFullYear();
 const years = Array.from({length:100},(_,i)=>currentYear-i);
 const days = Array.from({length:31},(_,i)=>i+1);
 const months = [
    {values:1,label:"January"},

 ]
export default function SignupForm() {

     const formik = useFormik({
        initialValues: {
          fullName: "",
          email: "",
          password: "",
          dateOfBirth:{
            day: '',
            month: '',
            year: ''
          }
          
        },
        validationSchema,
        onSubmit: (values) => {

            const {day,month,year} = values.dateOfBirth
            const dateOfBirth = `${year}-${month}-${day}`
            values.dateOfBirth = dateOfBirth;
          console.log("form value ", values);
        }
      });

      const handleDateChange = (name) => (event) =>{
        formik.setFieldValue("dateOfBirth",{
            ...formik.values.dateOfBirth,
            [name]:event.target.value,
        })
      }


  return (
    <form onSubmit={formik.handleSubmit}>
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "10px",
        border:"rounded"
       
      }}
    >
          <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          variant="outlined"
          size="medium"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          sx={{
            marginBottom: "10px",
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            }
          }}
        />
      </Grid>

      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          variant="outlined"
          size="medium"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{
            marginBottom: "10px",
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            }
          }}
        />
      </Grid>

      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          label="Password"
          name="password"
          variant="outlined"
          size="medium"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{
            marginBottom: "10px",
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            }
          }}
        />
      </Grid>

      <Grid item xs={4}
      >
        <InputLabel>Date</InputLabel>
        <Select name='day' 
        onChange={formik.handleChange("day")}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth.day}>
            {days.map((day)=><MenuItem key={day} value={day}>{day}</MenuItem>)}
        </Select>

      </Grid>

      <Grid item xs={12} sx={{ width: "100%" }}>
        <Button
          sx={{
            borderRadius: "29px",
            py: "15px",
            bgcolor: blue[500],
            '&:hover': { bgcolor: blue[700] },
            fontSize: '1rem',
            width: '100%',
            boxSizing: 'border-box',
          }}
          type="submit"
          variant="contained"
          size="large"
        >
          SignIn
        </Button>
      </Grid>
    </Grid>
  </form>
  )
}
