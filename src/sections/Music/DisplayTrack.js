import { BsMusicNoteBeamed } from 'react-icons/bs';
import styled from 'styled-components';
import Volume from './Volume';

const AudioInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 37.5em) {
    align-items: center;
  }
`;

const AudioImageWrapper = styled.div`
  width: 50%;
  height: 50%;

  & img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 37.5em) {
    margin-right: 1rem;
    width: 60%;
    height: 60%;
  }
`;

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={handleNext} />

      <AudioInfoWrapper>
        <AudioImageWrapper>
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </AudioImageWrapper>
        <Volume audioRef={audioRef} />
      </AudioInfoWrapper>
    </div>
  );
};
export default DisplayTrack;
