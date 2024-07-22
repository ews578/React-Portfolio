import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const buttonStyle = {
    color: '#244c5e',
    textDecoration: 'none',
    padding: '5px 10px',
    marginRight: '10px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    transition: 'background-color 0.5s ease, color 0.5s ease', // Add transitions for background color and text color change
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#ADD8E6', // Light blue color
  };

  return (
    <div className="nav-container" style={{ background: '#244c5e', color: '#ffffff', padding: '10px' }}>
      <h2>Eric Snider</h2>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            style={currentPage === 'Portfolio' ? buttonHoverStyle : buttonStyle} // Apply hover style if current page
            onMouseOver={(e) => e.target.style.backgroundColor = '#ADD8E6'} // Light blue color on hover
            onMouseOut={(e) => e.target.style.backgroundColor = currentPage === 'Portfolio' ? '#ADD8E6' : '#ffffff'} // Maintain hover color if current page
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#About Me"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            style={currentPage === 'AboutMe' ? buttonHoverStyle : buttonStyle} // Apply hover style if current page
            onMouseOver={(e) => e.target.style.backgroundColor = '#ADD8E6'} // Light blue color on hover
            onMouseOut={(e) => e.target.style.backgroundColor = currentPage === 'AboutMe' ? '#ADD8E6' : '#ffffff'} // Maintain hover color if current page
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            style={currentPage === 'Resume' ? buttonHoverStyle : buttonStyle} // Apply hover style if current page
            onMouseOver={(e) => e.target.style.backgroundColor = '#ADD8E6'} // Light blue color on hover
            onMouseOut={(e) => e.target.style.backgroundColor = currentPage === 'Resume' ? '#ADD8E6' : '#ffffff'} // Maintain hover color if current page
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            style={currentPage === 'Contact' ? buttonHoverStyle : buttonStyle} // Apply hover style if current page
            onMouseOver={(e) => e.target.style.backgroundColor = '#ADD8E6'} // Light blue color on hover
            onMouseOut={(e) => e.target.style.backgroundColor = currentPage === 'Contact' ? '#ADD8E6' : '#ffffff'} // Maintain hover color if current page
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;