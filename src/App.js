import BackgroundHeader from './components/header/BackgroundHeader';
import { useState } from 'react';
import SideNav from './components/navigation/SideNav';
import AboutView from './views/AboutView';
import SkillsView from './views/SkillsView';
import ProjectView from './views/ProjectView';
import ContacView from './views/ContactView';
import Footer from './components/footer/Footer';
import portfolioData from './assets/data/portfolioData';
import './App.scss';

const App = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const handleActivateSection = (section) => {
    setActiveSection(section);
  };

  const handleHideSideNav = () => {
    setShowSideNav(false);
  };

  const handleShowSideNav = () => {
    setShowSideNav(true);
  };

  return (
    <div className="App">
      <SideNav
        sections={[
          { href: '#intro', label: 'Intro', eventkey: '1' },
          { href: '#about', label: 'About', eventkey: '2' },
          { href: '#skills', label: 'Skills', eventkey: '3' },
          { href: '#projects', label: 'Projects', eventkey: '4' },
          { href: '#contact', label: 'Contact', eventkey: '5' }
        ]}
        showSideNav={showSideNav}
        currentActiveSection={activeSection}
      />
      <div id="app-body">
        <BackgroundHeader showSideNav={showSideNav} handleHideSideNav={handleHideSideNav} handleShowSideNav={handleShowSideNav} handleActivateSection={handleActivateSection}></BackgroundHeader>
        <main>
          <AboutView intro={portfolioData.about[0]} firstName={portfolioData.about[1]} aboutText={portfolioData.about.slice(2)} handleActivateSection={handleActivateSection} />
          <SkillsView handleActivateSection={handleActivateSection} />
          <ProjectView handleActivateSection={handleActivateSection} />
          <ContacView handleActivateSection={handleActivateSection} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
