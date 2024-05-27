import React, { RefObject } from 'react';
import Link from 'next/link';
import useActiveHash from '../hooks/useActiveHash';

interface NavProps {
  aboutRef: RefObject<HTMLDivElement>;
  educationRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Nav: React.FC<NavProps> = ({ aboutRef, educationRef, experienceRef, skillsRef, contactRef }) => {
  const activeHash = useActiveHash();

  const isActive = (hash: string) => activeHash === hash;

  return (
    <nav className="w-full">
      <ul className="flex justify-around p-4">
        <li className={`nav-item ${isActive('#about') ? 'nav-link-active' : ''}`}>
          <Link href="#about">
            <span className="nav-link">About</span>
          </Link>
        </li>
        <li className={`nav-item ${isActive('#education') ? 'nav-link-active' : ''}`}>
          <Link href="#education">
            <span className="nav-link">Education</span>
          </Link>
        </li>
        <li className={`nav-item ${isActive('#experience') ? 'nav-link-active' : ''}`}>
          <Link href="#experience">
            <span className="nav-link">Experience</span>
          </Link>
        </li>
        <li className={`nav-item ${isActive('#skills') ? 'nav-link-active' : ''}`}>
          <Link href="#skills">
            <span className="nav-link">Skills</span>
          </Link>
        </li>
        <li className={`nav-item ${isActive('#contact') ? 'nav-link-active' : ''}`}>
          <Link href="#contact">
            <span className="nav-link">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
