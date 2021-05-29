import React from 'react'
import store from '../redux/store'
import { connect, useDispatch, useSelector } from "react-redux";
import { PlayerConsumer } from './PlayerContext'

function SaveStateButton(){
    const dispatch = useDispatch()
    const settings = useSelector(state => state.settings.settings)

    function nextSettingId(setting) {
        const maxId = setting.reduce((maxId, setting) => Math.max(setting.id, maxId), -1)
        return maxId + 1
    }

    const saveState = (e, state) => {
        e.preventDefault()
        let newId = nextSettingId(settings)
        dispatch({type: 'settings/stateAdded', 
    //     payload: { 
    //         id: state.id,
    //         url: state.url,
    //         pip: state.pip,
    //         playing: state.playing,
    //         controls: state.controls,
    //         light: state.light,
    //         loop: state.loop,
    //         volume: state.volumne,
    //         duration: state.duration,
    //         playbackRate: state.playbackRate,
    //         current: state.current,
    //         seekTime: state.seekTime,
    //         endPoint: state.endPoint,
    //         loops: state.loops}})
            
    //         sessionStorage.setItem('current', JSON.stringify(settings))
    //         console.log('Saved to local storage...')
    //    }
        payload: { 
            id: newId,
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
            state["id"] = newId

            let newState = JSON.stringify(state)

            localStorage.setItem(newId, newState)
            console.log('Saved to local storage...')
        }
    
    return (
        <PlayerConsumer>
        {
            (state) => {
                return (
                    <button onClick={e => saveState(e, state)}>
                        Save State
                    </button>
                )
            }
        }
        </PlayerConsumer>
    )
}

export default connect()(SaveStateButton)