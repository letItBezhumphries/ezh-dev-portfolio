import styled from 'styled-components';

const SmallDivider = styled.span`
  display: block;
  margin: 2px 0 30px 0px;
  width: 100px;
  height: 2px;
`;

const MediumDivider = styled.span`
  display: block;
  margin: 4px 0 30px 0px;
  width: 150px;
  height: 3px;
`;

const StyledDivider = styled.span`
  display: block;
  margin: 30px 0;
  width: 100px;
  height: 2px;
`;

const CenteredDivider = styled.div`
  background: #fff;
  font-size: 1.6rem;
  height: 4px;
  margin: 2.5rem auto;
  width: 21rem;
`;

const FullDivider = styled.div`
  display: block;
  margin: 30px 0;
  width: 60%;
  height: 2px;
`;

const Divider = ({ color, size, centered, full }) => {
  let divider;

  if (centered) {
    return <CenteredDivider></CenteredDivider>;
  } else if (full) {
    return <FullDivider style={{ backgroundColor: color }}></FullDivider>;
  } else {
    if (size === 'sm') {
      divider = (
        <SmallDivider style={{ backgroundColor: color }}></SmallDivider>
      );
    } else if (size === 'md') {
      divider = (
        <MediumDivider style={{ backgroundColor: color }}></MediumDivider>
      );
    } else {
      divider = (
        <StyledDivider style={{ backgroundColor: color }}></StyledDivider>
      );
    }
  }

  return divider;
};

export default Divider;
