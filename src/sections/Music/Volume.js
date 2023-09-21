import { useState, useEffect } from 'react';
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from 'react-icons/io';
import styled from 'styled-components';

const VolumeControlWrapper = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 1.3rem;

  & button {
    bottom: 0;
    border: none;
    padding: 4px;
    cursor: pointer;
    background-color: inherit;
    color: #fff;
    transform: rotate(-90deg);

    &:hover {
      color: grey;
    }
  }
`;

const Volume = ({ audioRef }) => {
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <VolumeControlWrapper>
      <button onClick={() => setMuteVolume((prev) => !prev)}>{muteVolume || volume < 5 ? <IoMdVolumeOff /> : volume < 40 ? <IoMdVolumeLow /> : <IoMdVolumeHigh />}</button>
      <div style={{ display: 'inline-block', width: '2.2em', overflow: 'hidden' }}>
        <div style={{ display: 'inline-block' }}>
          <div
            style={{
              display: 'inline-block',
              height: '0',
              padding: '0 0 100% 0',
              transform: 'rotate(-90deg)'
            }}
          >
            <input
              className="volume-ctl"
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              style={{
                width: '10em',
                background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`
              }}
            />
          </div>
        </div>
      </div>
    </VolumeControlWrapper>
  );
};

export default Volume;
