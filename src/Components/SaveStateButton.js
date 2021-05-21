import React from 'react'
import store from '../redux/store'
import { connect } from "react-redux";


function SaveStateButton({state}){
    const saveState = (e) => {
        e.preventDefault()
        store.dispatch({type: 'settings/stateAdded', payload: { 
            url: state.url,
            pip: state.pip,
            playing: state.playing,
            controls: state.controls,
            light: state.light,
            loop: state.loop,
            volume: state.volumne,
            duration: state.duration,
            playbackRate: state.playbackRate,
            current: state.current,
            seekTime: state.seekTime,
            endPoint: state.endPoint,
            loops: state.loops}})
    }
    return (
        <div>
            <button onClick={saveState}>
                Save State
            </button>
        </div>
    )
}

export default connect()(SaveStateButton)