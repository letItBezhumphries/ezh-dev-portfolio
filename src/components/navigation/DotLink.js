import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

const DotLink = ({ label, eventkey, activeLink, click, href, currentActiveSection }) => {
  const [navLinkClass, setNavLinkClass] = useState('dot-link');

  const handleClick = () => {
    click(label);
  };

  useEffect(() => {
    if (activeLink === label || label.toLowerCase() === currentActiveSection) {
      setNavLinkClass((prev) => (prev += ' active'));
    } else {
      setNavLinkClass('dot-link');
    }
  }, [activeLink, label, currentActiveSection]);

  return (
    <>
      <Nav.Item as="li" className="dot-container">
        <Nav.Link className={navLinkClass} href={href} onClick={handleClick} eventkey={eventkey}>
          <span className="dot"></span>
          <span className="dot-label">{label}</span>
        </Nav.Link>
      </Nav.Item>
    </>
  );
};
export default DotLink;
