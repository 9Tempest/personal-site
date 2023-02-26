import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Luke Zhu</h2>
        <p><a href="lukezhu167@gmail.com">lukezhu167@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Luke.
        I am a graduate from <a href="https://cs.uwaterloo.ca/">University of Waterloo majoring in Computer Science</a>. I was Undergraduate Research Assistant
        with <a href="https://plg.uwaterloo.ca/~pabuhr/">Prof. Peter Buhr</a> and <a href="https://cs.uwaterloo.ca/~mkarsten/">Prof. Martin Karsten</a> at the University of Waterloo in 2022.
        I was C++ R&D Intern at Baidu and Momenta in 2021.
      </p>
      <ul className="actions">
        <li>
          <Link to="/files/Resume_Luke.pdf" target="_blank" className="button" download>Download Resume</Link>
        </li>
        <li>
          <Link to="/files/PS_Luke.pdf" target="_blank" className="button" download>Download Personal Statement</Link>
        </li>
        <li>
          <Link to="/files/reference_letter.pdf" target="_blank" className="button" download>Download Reference Letter</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; lukezhu167@gmail.com <Link to="/">lukezhu167@gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
