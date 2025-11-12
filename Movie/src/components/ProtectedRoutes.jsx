
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export  function ProtectedRoute({ children }) {
  //getting current looded in user from store state
  const user = useSelector((state) => state.auth.user);


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;  // children  the private routes
}
