import './InteractiveHeading.scss';

const InteractiveHeading = ({ heading, link, githublink, size }) => {
  let headingText = heading.split('').map((letter, i) => {
    if (letter === ' ') {
      return <span key={i}>&nbsp;</span>;
    } else if (letter === '&') {
      return (
        <span key={i} className="space">
          {letter}
        </span>
      );
    } else {
      return <span key={i}>{letter}</span>;
    }
  });

  return (
    <h1 className={size === 'lrg' ? 'interactiveHeading-lrg' : size === 'md' ? 'interactiveHeading-md' : size === 'sm' ? 'interactiveHeading-sm' : 'interactiveHeading'}>
      {link ? <a href={githublink}>{headingText}</a> : <div>{headingText}</div>}
    </h1>
  );
};
export default InteractiveHeading;
