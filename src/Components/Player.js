import React, {useRef, useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import Scrub from './Scrub'
import Endpoint from './EndScrub'
import { connect } from "react-redux";
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import Timestamp from './Timestamp'
import store from '../redux/store'
import SaveStateButton from './SaveStateButton'

function Player(){
    const [state, setState] = useState({
        url: "https://www.youtube.com/watch?v=Ce6so35INYU&ab_channel=JangYoon-ju-TopicJangYoon-ju-Topic",
        pip: false,
        playing: true,
        controls: false,
        light: false,
        loop: false,
        volume: 0.8,
        duration: 0,
        playbackRate: 1.0,
        current: 0,
        seekTime: 0,
        endPoint: 0,
        loops: 0
    })

    const dispatch = useDispatch()
    const [current_url, setCurrent] = useState(" ")
    // const playerContext = React.createContext(state)    
    const player = useRef(null)
   

    useEffect(() => {
        // localStorage.getItem('currentState')
        // console.log(`Playing: ${state.playing}`)
        if (state.current >= state.endPoint && state.seekTime !== 0 && state.endPoint !== 0 && state.playing === true){
            player.current.seekTo(state.seekTime, 'seconds')
            setState(prevState => ({...prevState, loops: state.loops+1}))
            // localStorage.setItem('currentState', state)
            store.subscribe(() => console.log(store.getState()))
            console.log('Saved to local storage.')
    }}, [state.current])

    function handleURLSubmit(e){
        e.preventDefault();
        // ReactPlayer.canPlay(current_url).valueOf
        setState(prevState =>  ({...prevState, url: current_url}))
        console.log(state)
    }

    function handleURLChange(e){
        e.preventDefault()
        setCurrent(e.target.value)
    }

    function handleDuration(duration){
        setState(prevState => ({...prevState, duration: duration}))
    }

    // function handleStop(){
    //     setState({playing: false})
    // }

    function handlePause(){
        setState(prevState => ({...prevState, playing: false}))
        console.log('Video paused...')
        console.log(state.playing)
    }

    function handlePlay(){
        setState(prevState => ({...prevState, playing: true}))
        console.log('Video playing...')
        console.log(state.playing)
    }

    function handlePlaytime(){
        setState(prevState =>  ({...prevState, current: player.current.getCurrentTime()})
        )
    }

    return(
        <div>
            <ReactPlayer
                width='100%'
                height='100%'
                // controls={true} 
                useRef={player}
                onDuration={handleDuration}
                onProgress={handlePlaytime}
                ref={player}
                playing={state.playing}
                // onPlay={handlePlay}
                onSeek={e => console.log('onSeek', e)}
                onPause={handlePause}
                onPlay={handlePlay}
                url={state.url}/>
            <div>
            <Loader 
                handleSubmit={handleURLSubmit}
                handleURLChange={handleURLChange}/>
            </div>
            <Endpoint   
                state={state}
                setState={setState}
                player={player}
            />
            <Scrub
                state={state}
                setState={setState}
                player={player}
                // handleSeek={handleSeek}
                // handleSeekChange={handleSeekChange}
                // seekTime={state.seekTime}
            />
            <Timestamp state={state}/>
            <SaveStateButton state={state}/>
        </div>
    )
}

export default connect()(Player);