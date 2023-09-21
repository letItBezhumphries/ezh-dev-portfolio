import { useState, useRef } from 'react';
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import Track from './Track';
import { SectionCard, CardList } from '../../components/Section';
import './Music.scss';

const Music = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleTrackItemClick = (index) => {
    if (trackIndex !== index) {
      setTrackIndex(index);
      setCurrentTrack(tracks[index]);
    }
  };

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <SectionCard heading="Favorite Coding Music" flexDirection={'row'}>
      <CardList>
        {tracks.map((track, i) => (
          <Track key={i} track={track} idx={i} trackIndex={trackIndex} click={handleTrackItemClick}></Track>
        ))}
      </CardList>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} setDuration={setDuration} progressBarRef={progressBarRef} handleNext={handleNext} />
          <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration} />
          <Controls
            audioRef={audioRef}
            setTimeProgress={setTimeProgress}
            duration={duration}
            progressBarRef={progressBarRef}
            tracks={tracks}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setCurrentTrack={setCurrentTrack}
            handleNext={handleNext}
          />
        </div>
      </div>
    </SectionCard>
  );
};

export default Music;
