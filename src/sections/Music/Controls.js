import { useState, useEffect, useRef, useCallback } from 'react';
// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setCurrentTrack,
  setTrackIndex,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      setTrackIndex(tracks.length - 1);
      setCurrentTrack(tracks[tracks.length - 1]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const repeat = useCallback(() => {
    // console.log('run');
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    // updating the css variable declared in css file and dynamically updating it
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef, duration, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div>
      <div className='controls'>
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={skipForward}>
          <IoPlayForwardSharp />
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};
export default Controls;
