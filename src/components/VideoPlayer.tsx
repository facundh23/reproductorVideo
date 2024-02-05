import { useRef, forwardRef, useImperativeHandle } from 'react'

interface VideoProps {
    source: string | undefined
}

interface VideoPlayerRefProps {
    play: () => void;
    pause: () => void;
    setVolume: (volume: number) => void;
}

const VideoPlayer = forwardRef<VideoPlayerRefProps, VideoProps>((props, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(
        ref, () => ({
            play: () => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            },
            pause: () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
            setVolume: (volume) => {
                if (videoRef.current) {
                    videoRef.current.volume = volume;
                }
            },
        }), [videoRef]
    )
    return (
        <div>
            <video ref={videoRef} width='400'>
                <source src={props.source} type='video/mp4' />
                Your browser does not support this video
            </video>
        </div>
    )
});

export default VideoPlayer