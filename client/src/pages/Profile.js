import React, { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileForm from "../components/ProfileForm";

function Profile({ user, onUpdate }) {
  const [showProfile, setShowProfile] = useState(true);

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
