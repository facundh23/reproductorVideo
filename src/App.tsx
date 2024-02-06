
import { useRef } from 'react'
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import video from './assets/testVideo.mp4'

export interface VideoPlayerRefProps {
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
}


function App() {

  const videoPlayerRef = useRef<VideoPlayerRefProps>(null);

  const handleClickPlay = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.play();
    }
  };
  const handleClickPuase = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.pause();
    }
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value)
    if (videoPlayerRef.current) {
      videoPlayerRef.current.setVolume(volume)
    }
  };
  return (
    <>
      <VideoPlayer source={video} ref={videoPlayerRef} />
      <div>
        <button onClick={handleClickPlay}>Play</button>
        <button onClick={handleClickPuase}>Pause</button>
      </div>
      <div>
        <label htmlFor="volume">Volume</label>
        <input type='range' min='0' max='1' step='0.1' onChange={handleVolumeChange} />
      </div>
    </>
  )
}

export default App
