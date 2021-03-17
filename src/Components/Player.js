import React, {useRef, useState} from 'react'
import ReactPlayer from 'react-player'
import Scrub from './Scrub'
function Player(){
    const [state, setState] = useState({
        url: null,
        pip: false,
        playing: true,
        controls: false,
        light: false,
        loop: false,
        volume: 0.8,
        duration: 0,
        playbackRate: 1.0,
        current: 0,
        seekTime: 0
    })
    
    const player = useRef(null)

    function handleSeek(e){
        e.preventDefault()
        let seekTime = state.seekTime
        if (seekTime > state.duration){
            console.log('Cannot load value')
            return false
        }
        setState(prevState => ({...prevState, current: seekTime}))
        player.current.seekTo(seekTime, 'seconds')
        return true
    }

    function handleSeekChange(e){
        let seekTime = e.target.value
        setState(prevState => ({...prevState, seekTime: seekTime}))
    }

    function handleDuration(duration){
        setState({duration: duration})
    }

    function handleStop(){
        setState({playing: false, url: null})
    }

    function handlePause(){
        setState(prevState => ({...prevState, playing: !prevState.playing}))
        console.log('Video paused.')
        // console.log(state.duration)
        // console.log(state.current)
    }

    function handlePlay(){
        setState(prevState => ({...prevState, playing: true}))
    }

    function handlePlaytime(){
        setState(prevState =>  ({...prevState, current: player.current.getCurrentTime().toFixed(0)}))
    }

    return(
        <div>
            <ReactPlayer
                width='50%'
                height='50%'
                controls={true} 
                useRef={player}
                onDuration={handleDuration}
                onProgress={handlePlaytime}
                ref={player}
                onPlay={handlePlay}
                onSeek={e => console.log('onSeek', e)}
                onPause={handlePause}
                url='https://www.youtube.com/watch?v=E5DCW-7-hCQ&ab_channel=MarioJudah'/>
            <div>
                
            </div>
            <Scrub
                handleSeek={handleSeek}
                handleSeekChange={handleSeekChange}
                seekTime={state.seekTime}
            />
            <div>
                Duration:
                    {state.duration}
            </div>
            <div>
                Current:
                    {state.current}
            </div>
        </div>
    )
}

export default Player;