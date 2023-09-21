import styled from 'styled-components';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const StyledTooltip = styled(Tooltip)`
  font-size: 16px;
  color: #fff;
  padding: 2rem 1rem;
`;

const Level = styled.span`
  font-size: 1em;
  display: flex;
  align-items: center;
  color: lightgrey;
  font-weight: 300;
`;

const SkillInfoTooltip = ({ id, children, text, location }) => (
  <OverlayTrigger
    overlay={<StyledTooltip id={id}>{text}</StyledTooltip>}
    placement={location ? location : 'right'}
  >
    <Level>{children}</Level>
  </OverlayTrigger>
);

export default SkillInfoTooltip;
