import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { useLocation } from "react-router";
function Profile(props) {
  const location = useLocation();
  const values = location.state;
  // console.log(values);
  return (
    <div>
      <ProfileHeader values={values} />
    </div>
  );
}

export default Profile;
