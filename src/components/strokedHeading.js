import './strokedHeading.scss';

const StrokedHeading = ({ text, headingClass }) => {
  return (
    <h1 data-text="Eric Z. Humphries" className={headingClass}>
      {text}
    </h1>
  );
};

export default StrokedHeading;
