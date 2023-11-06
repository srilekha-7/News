import React from "react";
import AuthHeader from "../components/AuthHeader";
import { useLocation } from "react-router";

function AuthenticatedHomePage(props) {
  const location = useLocation();
  const values = location.state;
  // console.log(values);
  // console.log(values.values.email);
  return (
    <div>
      <AuthHeader values={values.values} />
    </div>
  );
}

export default AuthenticatedHomePage;
