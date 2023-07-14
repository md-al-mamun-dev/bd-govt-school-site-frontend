import './styles.css'
import { useState, useRef } from 'react'
import playIcon from '../../assets/icons/play.svg'
import pauseIcon from '../../assets/icons/pause.svg'


export default function AudioPlayer() {


    const [playing, setPlaying] = useState(false);
    const nationalAnthemeUrl = "https://site.automate.com.bd/wp-content/uploads/2023/06/bd_national_anthem.mp3"
    const audioRef = useRef(new Audio(nationalAnthemeUrl))

    const play = ()=>{
        setPlaying(true);
        audioRef.current.play()
    }

    const pause = () => {
        setPlaying(false);
        audioRef.current.pause();
      };

    const display_play = <> 
                            <img className='play-pause-icon' src={playIcon} alt="play" /> 
                            Play 
                        </>
    const display_pause= <> 
                            <img className='play-pause-icon' src={pauseIcon} alt="pause" /> 
                            Pause
                        </> 






  return (
    <div>
        <button className='play-pause-btn' onClick={playing ? pause : play}>
            {   
                playing 
                    ? display_pause
                    : display_play 
            }
        </button>
    </div>
  )
}
