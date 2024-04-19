import React from 'react';
import profileImage from "../../../Images/hwami.jpg";

const TopProfile = () => {
  return (
    <section className="Top" id="Topprofile">
      <img src={profileImage} className="profileImage" alt="" />
      <h2>Ishikawa Fami</h2>
      <p>Faculty of Data Science, Musashino University</p>
    </section>
  );
};

export default TopProfile;
