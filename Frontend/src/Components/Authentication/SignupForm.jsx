import { Button, Grid, InputLabel, MenuItem, TextField, Select, FormControl } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Store/Auth/Action';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required")
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

export default function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      dateOfBirth: {
        day: '',
        month: '',
        year: ''
      }
    },
    validationSchema,
    onSubmit: (values) => {
      const { day, month, year } = values.dateOfBirth;
      const birthDate = `${year}-${month}-${day}`;
      
      const userData = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        birthDate: birthDate
      };
      
      console.log("Registering user with data:", userData);
      dispatch(registerUser(userData));
    }
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("dateOfBirth", {
      ...formik.values.dateOfBirth,
      [name]: event.target.value,
    })
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
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
              },
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

        {/* Date of Birth Fields */}
        <Grid container spacing={1} item xs={12} justifyContent="space-between" sx={{ marginBottom: "10px" }}>
          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel sx={{ position: 'static', transform: 'none', fontSize: 16, textAlign: 'center', mb: 1 }}>
                Date
              </InputLabel>
              <Select
                name="day"
                onChange={handleDateChange("day")}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth.day}
                displayEmpty
                fullWidth
                sx={{
                  borderRadius: '10px',
                  height: '56px',
                  background: '#fff',
                }}
              >
                <MenuItem value="" disabled>Day</MenuItem>
                {days.map((day) => (
                  <MenuItem key={day} value={day}>{day}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel sx={{ position: 'static', transform: 'none', fontSize: 16, textAlign: 'center', mb: 1 }}>
                Month
              </InputLabel>
              <Select
                name="month"
                onChange={handleDateChange("month")}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth.month}
                displayEmpty
                fullWidth
                sx={{
                  borderRadius: '10px',
                  height: '56px',
                  background: '#fff',
                }}
              >
                <MenuItem value="" disabled>Month</MenuItem>
                {months.map((month) => (
                  <MenuItem key={month.value} value={month.value}>
                    {month.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel sx={{ position: 'static', transform: 'none', fontSize: 16, textAlign: 'center', mb: 1 }}>
                Year
              </InputLabel>
              <Select
                name="year"
                onChange={handleDateChange("year")}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth.year}
                displayEmpty
                fullWidth
                sx={{
                  borderRadius: '10px',
                  height: '56px',
                  background: '#fff',
                }}
              >
                <MenuItem value="" disabled>Year</MenuItem>
                {years.map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Sign Up Button */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Button
            sx={{
              borderRadius: "29px",
              py: "12px",
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
            Sign Up
          </Button>
        </Grid>

        {/* Sign In Link */}
        <Grid item xs={12} sx={{ width: "100%" }} textAlign="center">
          <p>Already have an account?</p>
          <Button variant="text" color="primary" href="/signin" sx={{ textTransform: 'none', fontWeight: 600 }}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
