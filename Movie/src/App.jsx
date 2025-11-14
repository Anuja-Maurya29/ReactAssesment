
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Registerpage } from "./pages/Registerpage";
import { Login } from "./pages/Login";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import MovieDetails from "./pages/MovieDetails";  
import { ProtectedRoute } from "./components/ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
         {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Login />} />

     {/* protected routes */}
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/movies/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

       {/* fallback routes */}
        <Route path="*" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  );
}
