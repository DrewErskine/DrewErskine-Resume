import React from "react";
import Image from "next/image";
import '../styles/headshot.css'; // Adjust the path to your CSS file
import profileImage from '/public/headshot.jpg'; // Update the path to your image

const Headshot: React.FC = () => {
  return (
    <div className="headshot-container">
      <Image 
        src={profileImage} 
        alt="Profile" 
        width={2316} // Set the actual width of the image
        height={3088} // Set the actual height of the image
        priority // This tells Next.js to prioritize the loading of this image
        className="profile-image-sidebar" 
      />
    </div>
  );
}

export default Headshot;
