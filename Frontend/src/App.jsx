import { useEffect } from "react";
import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Authentication from "./Components/Authentication/Authentication";
import { useDispatch, useSelector } from "react-redux";
import store from "./Components/Store/store";
import { getUserProfile } from "./Components/Store/Auth/Action";

function App() {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(() => {
    if (jwt && !auth.user) {
      console.log("App - Dispatching getUserProfile with jwt:", jwt);
      dispatch(getUserProfile(jwt));  
      navigate("/")
    }
  }, [jwt, dispatch, auth.user]);

  // Debug logging
  console.log("App - auth state:", auth);
  console.log("App - jwt from localStorage:", jwt);

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={auth.user ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
