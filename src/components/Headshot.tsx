import React from "react";
import Image from "next/image";
import './sections.css'; // Ensure this file is imported for the styles
import profileImage from '/public/headshot.jpg'; // Update the path to your image

const Headshot: React.FC = () => {
  return (
    <div className="headshot-container">
      <Image 
        src={profileImage} 
        alt="Profile" 
        width={150} // Set the actual width of the image
        height={150} // Set the actual height of the image
        className="profile-image-sidebar" 
      />
    </div>
  );
}

export default Headshot;
