import React, { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileForm from "../components/forms/ProfileForm";

function Profile({ onUpdate }) {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      {showProfile ? (
        <main className="container card m-auto" class="container card m-auto">
          <ProfileInfo setShowProfile={setShowProfile} />
        </main>
      ) : (
        <main className="container card m-auto" class="container card m-auto">
          <ProfileForm setShowProfile={setShowProfile} />
        </main>
      )}
    </>
  );
}

export default Profile;
