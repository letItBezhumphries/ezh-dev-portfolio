import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

const TrackItem = styled.h4`
  margin-bottom: 10px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 0.75rem;
  white-space: nowrap;
  font-size: 1em;
  font-weight: 600;
  border: 0.8px solid #778492;

  @media only screen and (max-width: 767.98px) {
    font-size: 0.8em;
  }

  & .music-icon {
    margin-right: 10px;
    font-size: 1em;
    color: #778492;
  }

  & span {
    font-size: 0.8em;
    font-weight: 500;
    color: #b0b7bf;
    margin-left: 5px;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:hover {
    color: #97a4b1;
  }

  &:hover .music-icon {
    color: #97a4b1;
  }

  &:hover span {
    color: #97a4b1;
  }
`;

const Track = ({ track, trackIndex, idx, click }) => {
  return (
    <TrackItem style={trackIndex === idx ? { color: 'orangered' } : { color: '#97a4b1' }} onClick={() => click(idx)}>
      <FontAwesomeIcon icon={faHeadphonesSimple} size="lg" className="music-icon" />
      {track.author} - <span>{track.title}</span>
    </TrackItem>
  );
};

export default Track;
