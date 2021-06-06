import React from 'react'
import { useDispatch } from 'react-redux'
import Time from './Time'

function SettingCard( {setting, setState, setValid, player} ){
    const dispatch = useDispatch() 

    function deleteHandler(e, id){
        e.preventDefault()
        dispatch({type: 'settings/stateRemove',
        payload: {id: id}})
        localStorage.removeItem(id)
    }

    function handleClick(e){
        e.preventDefault();
        console.log(setting.id)
        setState(prevState => ({...prevState,
            id: setting.id,
            url: setting.url,
            pip: setting.pip,
            playing: setting.playing,
            contols: setting.controls,
            light: setting.light,
            loop: setting.loop,
            volume: setting.volume,
            duration: setting.duration,
            playbackRate: setting.playbackRate,
            loops: setting.loops,
            endPoint: setting.endPoint,
            seekTime: setting.seekTime,
            current: setting.seekTime,
        }), () => {
            player.current.seekTo(setting.seekTime,'seconds')
        })
        setValid(true)
    }

    return(
        <div className="flex space-x-4 border-gray-400 px-8 py-8 rounded-lg object-cover bg-white ">
            <button className=" hover:text-blue-300 inline-grid rounded-lg p-4 border border-gray-300" onClick={handleClick}>
                <label>
                    {setting.id}
                </label>
                <label>
                    Current | <Time seconds={setting.current}/>
                </label>
                <label className=" text-gray-400 text-xs">
                    {setting.url}
                </label>
            </button>
            <button className="w-1/2 h-3/4 hover:bg-gray-600 flex items-center justify-center rounded-md text-white bg-black" onClick={(e) => deleteHandler(e, setting.id)}>
                Delete
            </button> 
        </div>

        
    )
}

export default SettingCard;