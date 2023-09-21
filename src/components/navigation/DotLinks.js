import { useState } from 'react';
import DotLink from './DotLink';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './DotLinks.scss';

const DotLinks = ({ showSideNav, currentActiveSection, children }) => {
  const [activeLink, setActiveLink] = useState(children[0].props.label);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar id="side-nav" className={showSideNav ? 'active' : ''}>
      <Nav as="ul" className="side-nav-links flex-column" defaultActiveKey={'/about'}>
        {children.map((child, idx) => {
          const { label, href, eventkey } = child.props;
          return <DotLink key={idx} activeLink={currentActiveSection} eventkey={eventkey} label={label} href={href} click={handleNavLinkClick} currentActiveSection={currentActiveSection} />;
        })}
        <ul>
          {children.map((child) => {
            if (child.props.label !== activeLink) return undefined;
            return null;
          })}
        </ul>
      </Nav>
    </Navbar>
  );
};

export default DotLinks;
