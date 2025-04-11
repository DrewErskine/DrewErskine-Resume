import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from '/public/headshot.jpg';
import "../styles/aboutSection.css";

interface AboutSectionProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>((props, ref) => {
  return (
    <>
      {/* About and Headshot Container */}
      <section 
        id="about"
        ref={ref}
        className="section about-section custom-about-section fade-in"
      >
        <div className="about-and-headshot-container">
          {/* About Content */}
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <div className="section-content">
              <p>
                Hello! I&apos;m Drew Erskine, a driven Full Stack Developer from Grand Rapids, Michigan, 
                currently studying Computer Science at Grand Valley State University. 
                I pride myself on creating robust platforms in SpringBoot with Dynamic React interfaces.
                Passionate about merging technology with diverse fields, I&apos;m eager to tackle new challenges 
                and innovate. Check out my projects on GitHub and connect to explore collaborative 
                opportunities! - <a href="https://github.com/dmerskine19" target="_blank" rel="noopener noreferrer">https://github.com/dmerskine19</a>
              </p>
            </div>
          </div>
          
          {/* Headshot */}
          <div className="headshot-container">
            <Image 
              src={profileImage} 
              alt="Profile" 
              width={2316}
              height={3088}
              priority
              className="profile-image-sidebar" 
            />
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="certifications-container">
          <h3 className="section-subtitle">Certifications</h3>
          <ul className="certifications-text">
            <li>
              <h4>Spring Boot 3 Professional</h4>
              <p>Certified in developing modern enterprise applications using Spring Boot 3, Spring Data JPA, and Spring Security.</p>
            </li>
            <li>
              <h4>AWS Certified Cloud Practitioner</h4>
              <p>Foundational certification validating cloud fluency and understanding of AWS Cloud services, architecture, security, and compliance.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection; 