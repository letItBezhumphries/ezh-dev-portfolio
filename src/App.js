import './App.scss';
import Header from './components/header';

import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Information from './components/sections/Information';
import Music from './components/sections/Music';
import Skills from './components/sections/Skills';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='section-wrapper'>
        <AboutMe />
        <Information />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Music />
      </div>
    </div>
  );
}

export default App;
