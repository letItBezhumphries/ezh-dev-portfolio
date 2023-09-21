const ContainerRow = ({ children, columns }) => {
  let items = children.map((child, i) => {
    const { col } = child.props;
    return (
      <div key={i} className={`col-${col}-of-${columns}`}>
        {child}
      </div>
    );
  });

  return (
    <div className='container-row'>
      {columns > 1 ? items : <div className='inner-container'>{children}</div>}
    </div>
  );
};

export default ContainerRow;
