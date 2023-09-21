import formatTime from '../../utils/formatTime';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: inherit;
  width: 50%;
  padding: 2px 2px;
  border-radius: 0;

  @media only screen and (max-width: 37.5em) {
    width: 80%;
  }

  & .current {
    color: #f50;
  }

  & .time {
    color: #fff;
    font-size: 10px;
    font-weight: 200;
    line-height: 26px;
  }
`;

const ProgressBar = ({ progressBarRef, audioRef, duration, timeProgress }) => {
  const handleTimeElapse = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <Bar>
      <span className="time current">{formatTime(timeProgress)}</span>
      <input type="range" ref={progressBarRef} defaultValue={'0'} onChange={handleTimeElapse} />
      <span className="time">{formatTime(duration)}</span>
    </Bar>
  );
};
export default ProgressBar;
