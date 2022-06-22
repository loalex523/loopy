import React, {useRef, useState, useCallback, useEffect} from 'react'
import ReactPlayer from 'react-player'
import Scrub from './Scrub'
import Endpoint from './EndScrub'
import { connect } from "react-redux";
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import Timestamp from './Timestamp'
import SettingsList from './SettingsList'
import { PlayerProvider } from './PlayerContext'
import SaveStateButton from './SaveStateButton'
import Volume from './Volume'
import './Styles/Player.css';

function Player(){
    const [state, setState] = useState({
        id: 0,
        url: "",
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

    const [validMedia, setValidMedia] = useState(true)

    const dispatch = useDispatch()
    // const settings = useSelector(state => state.currentStatus)
    const [current_url, setCurrent] = useState(" ")
    const player = useRef(null)

    const dispatchToStore = useCallback(() => {
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
    }, [dispatch])

    useEffect(() => {
        dispatchToStore()
    }, [dispatchToStore])

    
    useEffect(() => {
        checkLoopback()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.current]) 

    function checkMedia(){
        state.url.trim().length === 0? 
            setValidMedia(false):setValidMedia(true)
    }
    

    function checkLoopback(){
        if (state.current >= state.endPoint && state.seekTime !== 0 && state.endPoint !== 0 && state.playing === true){
            player.current.seekTo(state.seekTime, 'seconds')
            setState(prevState => ({...prevState, loops: state.loops+1}))
        }
    }

    function handleURLSubmit(e){
        e.preventDefault();
        // ReactPlayer.canPlay(current_url).valueOf
        if (current_url.trim().length === 0){
            setValidMedia(false)
            console.log('Invalid Media')
        }
        else{
            setValidMedia(true)
            setState(prevState =>  ({...prevState, url: current_url}))
            console.log('Valid Media')
        }
    }

    function handleURLChange(e){
        e.preventDefault()
        setCurrent(e.target.value)
    }

    function handleDuration(duration){
        setState(prevState => ({...prevState, duration: duration}))
    }

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
        setState(prevState =>  ({...prevState, current: player.current.getCurrentTime()}))
    }

    function handleError(e){
        e.preventDefault()
        setValidMedia(false)
        console.log('onError', e)
    }

    return(
        <div className="p-8 flex flex-col text-center items-center w-4/5 ">
            <PlayerProvider value={state}>
                <div className="rounded-md border-white p-5 bg-gray-400 h-96 w-5/6 mb-5">
                    {/*state.url.trim().length === 0?  */
                        validMedia? <ReactPlayer
                            width='100%'
                            height='100%'
                            // controls={true} 
                            volume={state.volume}
                            useref={player}
                            onDuration={handleDuration}
                            onProgress={handlePlaytime}
                            ref={player}
                            playing={state.playing}
                            // onPlay={handlePlay}
                            onSeek={e => console.log('onSeek', e)}
                            onPause={handlePause}
                            onPlay={handlePlay}
                            url={state.url}
                            onError={handleError}
                            /> 
                            : 
                        <div className=" text-red-400"> Invalid media. Please enter a valid URL. </div> 
                    }
                </div>
                  <Loader 
                    handleSubmit={handleURLSubmit}
                    handleURLChange={handleURLChange}/>
                <div>
                
                </div>
                <Timestamp/>

                {validMedia? <div>
                    <Endpoint   
                    state={state}
                    setState={setState}
                    player={player}
                    />
                    <Scrub
                        state={state}
                        setState={setState}
                        player={player}
                        validMedia={validMedia}
                        // handleSeek={handleSeek}
                        // handleSeekChange={handleSeekChange}
                        // seekTime={state.seekTime}
                    />
                    <Volume 
                        state={state}
                        setState={setState}
                        player={player}
                        validMedia={validMedia}    
                    />
                     <SaveStateButton/>
                </div>
                : null}
            <SettingsList setValid={setValidMedia} setState={setState} player={player} />
            </PlayerProvider>
        </div>
    )
}

export default connect()(Player);