import React from 'react';
import '/style.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav-container" style={{ background: '#244c5e', color: '#ffffff', padding: '10px' }}>
      <h2>Eric Snider</h2>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#244c5e', textDecoration: 'none', padding: '5px 10px', marginRight: '10px', borderRadius: '5px', backgroundColor: '#ffffff' }}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#About Me"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#244c5e', textDecoration: 'none', padding: '5px 10px', marginRight: '10px', borderRadius: '5px', backgroundColor: '#ffffff' }}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#244c5e', textDecoration: 'none', padding: '5px 10px', marginRight: '10px', borderRadius: '5px', backgroundColor: '#ffffff' }}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            style={{ color: '#244c5e', textDecoration: 'none', padding: '5px 10px', marginRight: '10px', borderRadius: '5px', backgroundColor: '#ffffff' }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;