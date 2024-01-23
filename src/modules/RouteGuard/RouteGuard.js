import React from "react";
import { Navigate } from "react-router-dom";
import { AddData } from "../AddData/AddData";

const RouteGuard = (props) => {
  const user = props.userDetails;

  function hasJWT() {
    let flag = false;

    //check user has loggedIn
    if (typeof user !== "undefined") {
      user.uid === "Qu7YrHDfpKbU9xDBuC5kNWzDWDu2"
        ? (flag = true)
        : (flag = false);
    }

    return flag;
  }

  return <>{hasJWT() ? <AddData /> : <Navigate to="/login" />}</>;
};

export default RouteGuard;
