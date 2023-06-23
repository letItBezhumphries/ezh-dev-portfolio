import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import './Music.scss';

const Music = () => {
  return (
    <section className='music-section'>
      <div className='section-inner'>
        <h2 className='section-heading'>Favorite Coding Music</h2>
        <div className='section-content'>
          <ul className='music-list'>
            <li className='music-listitem'>
              <FontAwesomeIcon
                icon={faHeadphones}
                size='lg'
                className='music-icon'
              />
              <a href='#'>Yeah Yeah Yeahs - Lovebomb</a>
            </li>
            <li className='music-listitem'>
              <FontAwesomeIcon
                icon={faHeadphones}
                size='lg'
                className='music-icon'
              />
              <a href='#'>TokiMonsta - Darkest (Dim)</a>
            </li>
            <li className='music-listitem'>
              <FontAwesomeIcon
                icon={faHeadphones}
                size='lg'
                className='music-icon'
              />
              <a href='#'>Frank Zappa - Watermelon In Easter Hay</a>
            </li>
            <li className='music-listitem'>
              <FontAwesomeIcon
                icon={faHeadphones}
                size='lg'
                className='music-icon'
              />
              <a href='#'>Big Grams - Fell In the Sun</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Music;
