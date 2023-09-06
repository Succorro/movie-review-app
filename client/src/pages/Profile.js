import React, { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileForm from "../components/ProfileForm";

function Profile({ user, onUpdate }) {
  // console.log(user);
  const [showProfile, setShowProfile] = useState(true);
  // const history = useHistory();
  // function handleReviewClick(id) {
  //   console.log("hi");
  //   history.push(`/movies/${id}`);
  // }
  return (
    <>
      {showProfile ? (
        <ProfileInfo user={user} setShowProfile={setShowProfile} />
      ) : (
        <ProfileForm
          onUpdate={onUpdate}
          user={user}
          setShowProfile={setShowProfile}
        />
      )}
    </>
  );
}

export default Profile;
