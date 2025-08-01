import { Button, TextField, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginUser } from '../Store/Auth/Action';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required")
});

export const SigninForm = () => {


  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values))
      console.log("form value ", values);
    }
  });

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
  );
};
