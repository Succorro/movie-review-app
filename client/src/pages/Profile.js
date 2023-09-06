import React, { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileForm from "../components/ProfileForm";

function Profile({ onUpdate }) {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      {showProfile ? (
        <ProfileInfo setShowProfile={setShowProfile} />
      ) : (
        <ProfileForm onUpdate={onUpdate} setShowProfile={setShowProfile} />
      )}
    </>
  );
}

export default Profile;
