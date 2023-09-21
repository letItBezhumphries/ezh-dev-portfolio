import './Pagination.scss';

const Pagination = ({ totalProjects, clicked, currentIndex }) => {
  let slides = totalProjects.map((proj, i) => {
    return (
      <li key={i} onClick={() => clicked(i)}>
        <div className={currentIndex === i ? 'slide active' : 'slide'}>
          <span className="fp-sr-only"></span>
          <span></span>
        </div>
      </li>
    );
  });

  return (
    <div className="projectNav">
      <ul>{slides}</ul>
    </div>
  );
};
export default Pagination;
