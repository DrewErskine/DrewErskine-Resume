import React from "react";

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <ul>
          <li>
            <strong>Company A</strong>
            <p>Position: Full Stack Developer</p>
            <p>Duration: Jan 2021 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Implemented RESTful APIs and integrated third-party services.</li>
            </ul>
          </li>
          <li>
            <strong>Company B</strong>
            <p>Position: Frontend Developer</p>
            <p>Duration: Jun 2019 - Dec 2020</p>
            <ul>
              <li>Designed and developed user interfaces using React and Redux.</li>
              <li>Collaborated with backend developers to integrate APIs.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
