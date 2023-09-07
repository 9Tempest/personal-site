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
        <p><a href="lukezhuz@umich.edu">lukezhuz@umich.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          <a href="https://drive.google.com/file/d/15Nc6zQon3H12p7z2GaP8r6KAPjTnU_jc/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; lukezhuz@umich.edu <Link to="/">lukezhuz@umich.edu</Link>.</p>
    </section>
  </section>
);

export default SideBar;
