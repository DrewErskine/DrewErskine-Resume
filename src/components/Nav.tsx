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
    <nav className="bg-header-bg shadow-md w-full fixed top-0 z-50">
      <ul className="flex justify-around p-4">
        <li className={`hover:text-accent-color transition duration-300 ${isActive('#about') ? 'nav-link-active' : ''}`}>
          <Link href="#about">
            <span className={`nav-link ${isActive('#about') ? 'nav-link-active' : ''}`}>About</span>
          </Link>
        </li>
        <li className={`hover:text-accent-color transition duration-300 ${isActive('#education') ? 'nav-link-active' : ''}`}>
          <Link href="#education">
            <span className={`nav-link ${isActive('#education') ? 'nav-link-active' : ''}`}>Education</span>
          </Link>
        </li>
        <li className={`hover:text-accent-color transition duration-300 ${isActive('#experience') ? 'nav-link-active' : ''}`}>
          <Link href="#experience">
            <span className={`nav-link ${isActive('#experience') ? 'nav-link-active' : ''}`}>Experience</span>
          </Link>
        </li>
        <li className={`hover:text-accent-color transition duration-300 ${isActive('#skills') ? 'nav-link-active' : ''}`}>
          <Link href="#skills">
            <span className={`nav-link ${isActive('#skills') ? 'nav-link-active' : ''}`}>Skills</span>
          </Link>
        </li>
        <li className={`hover:text-accent-color transition duration-300 ${isActive('#contact') ? 'nav-link-active' : ''}`}>
          <Link href="#contact">
            <span className={`nav-link ${isActive('#contact') ? 'nav-link-active' : ''}`}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
