import React, {useRef, useState, useMemo, useEffect} from 'react'
import ReactPlayer from 'react-player'
import Scrub from './Scrub'
import Endpoint from './EndScrub'
import { connect } from "react-redux";
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import Timestamp from './Timestamp'
import store from '../redux/store'
import SettingsList from './SettingsList'
import { PlayerProvider } from './PlayerContext'
import SaveStateButton from './SaveStateButton'
import './Styles/Player.css';

function Player(){
    const [state, setState] = useState({
        id: 0,
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
    const settings = useSelector(state => state.currentStatus)
    const [current_url, setCurrent] = useState(" ")
    const player = useRef(null)


    // store.subscribe()

    // useEffect(() => {
    //     let array = JSON.parse(sessionStorage.getItem('current') || '[]')
    //     array.forEach(function (setting, i){
    //         dispatch({type: 'settings/stateAdded', 
    //         payload: { 
    //         id: array[i].id,
    //         url: array[i].url,
    //         pip: array[i].pip,
    //         playing: array[i].playing,
    //         controls: array[i].controls,
    //         light: array[i].light,
    //         loop: array[i].loop,
    //         volume: array[i].volumne,
    //         duration: array[i].duration,
    //         playbackRate: array[i].playbackRate,
    //         current: array[i].current,
    //         seekTime: array[i].seekTime,
    //         endPoint: array[i].endPoint,
    //         loops: array[i].loops}})
    //     })
    // }, [settings.length])

    useEffect(() => {
        Object.keys(localStorage).forEach(function (i){
            dispatch({type: 'settings/stateAdded', 
            payload: { 
            id: (JSON.parse(localStorage.getItem(i))["id"]),
            url: (JSON.parse(localStorage.getItem(i))["url"]),
            pip: (JSON.parse(localStorage.getItem(i))["pip"]),
            playing: (JSON.parse(localStorage.getItem(i))["playing"]),
            controls: (JSON.parse(localStorage.getItem(i))["controls"]),
            light: (JSON.parse(localStorage.getItem(i))["light"]),
            loop: (JSON.parse(localStorage.getItem(i))["loop"]),
            volume: (JSON.parse(localStorage.getItem(i))["volume"]),
            duration: (JSON.parse(localStorage.getItem(i))["duration"]),
            playbackRate: (JSON.parse(localStorage.getItem(i))["playbackRate"]),
            current: (JSON.parse(localStorage.getItem(i))["current"]),
            seekTime: (JSON.parse(localStorage.getItem(i))["seekTime"]),
            endPoint: (JSON.parse(localStorage.getItem(i))["endPoint"]),
            loops: (JSON.parse(localStorage.getItem(i))["loops"])}})
        })
    }, [settings.length])

    useEffect(() => {
        // localStorage.getItem('currentState')
        // console.log(`Playing: ${state.playing}`)
        // if (state.seekTime != 0 && state.current == 0){
        //     player.current.seekTo(state.seekTime, 'seconds')
        // }
        if (state.current >= state.endPoint && state.seekTime !== 0 && state.endPoint !== 0 && state.playing === true){
            player.current.seekTo(state.seekTime, 'seconds')
            setState(prevState => ({...prevState, loops: state.loops+1}))
            // localStorage.setItem('currentState', state)
            // console.log('Saved to local storage.')
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
            <PlayerProvider value={state}>
                <div className='player-frame'>
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
                </div>
               
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
                <Timestamp/>
                <SaveStateButton/>
                <SettingsList setState={setState} player={player} />
            </PlayerProvider>
        </div>
    )
}

export default connect()(Player);