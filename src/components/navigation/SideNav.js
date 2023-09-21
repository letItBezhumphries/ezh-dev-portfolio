import DotLinks from './DotLinks';

const SideNav = ({ showSideNav, sections, currentActiveSection }) => {
  return (
    <DotLinks
      showSideNav={showSideNav}
      currentActiveSection={currentActiveSection}
    >
      {sections.map((sect, i) => (
        <div
          key={i}
          label={sect.label}
          href={sect.href}
          eventkey={sect.eventkey}
        ></div>
      ))}
    </DotLinks>
  );
};
export default SideNav;
