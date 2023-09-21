import './RevealHeading.scss';

const RevealHeading = ({ name, subtext }) => {
  return (
    <div className="revealHeading-container">
      <div className="revealHeading-wrapper">
        <h1 className="revealHeading" data-content={name}>
          <span className="name">{name}</span>
        </h1>
        <div className="subheading-wrapper">
          <p className="subtext">
            <span className="inner-text">{subtext}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RevealHeading;
