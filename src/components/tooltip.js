import styled from 'styled-components';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const StyledTooltip = styled(Tooltip)`
  font-size: 16px;
  color: #fff;
  padding: 2rem 1rem;

  @media only screen and (max-width: 37.5em) {
    padding: 1rem 0.5rem;
    font-size: 12px;
  }

  @media only screen and (max-width: 425px) {
    padding: 0.5rem 0.25rem;
    font-size: 10px;
  }
`;

const Rating = styled.span`
  font-size: 1em;
  display: flex;
  align-items: center;
  color: lightgrey;
  font-weight: 300;
`;

const SkillInfoTooltip = ({ id, children, text, location }) => (
  <OverlayTrigger overlay={<StyledTooltip id={id}>{text}</StyledTooltip>} placement={location ? location : 'right'}>
    <Rating>{children}</Rating>
  </OverlayTrigger>
);

export default SkillInfoTooltip;
