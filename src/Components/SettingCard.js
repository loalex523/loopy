import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import Time from './Time'

function SettingCard( {setting, setState, setValid, player} ){
    const dispatch = useDispatch() 

    const [hover, setHover] = useState(false)

    function deleteHandler(e, id){
        e.preventDefault()
        dispatch({type: 'settings/stateRemove',
        payload: {id: id}})
        localStorage.removeItem(id)
    }

    function handleClick(e){
        e.preventDefault();
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
    }

    return(
        <div className="flex space-x-4 border-gray-400 px-8 py-8 rounded-lg object-cover bg-white" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <button className=" hover:text-blue-300 inline-grid rounded-lg p-4 border border-gray-300 w-4/6" onClick={handleClick}>
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
            {
                hover?  
                <button className="hover:bg-gray-600 flex items-center justify-center rounded-md w-48 h-5 text-white bg-black" onClick={(e) => deleteHandler(e, setting.id)}>
                    Delete
                </button>  : null
            }
           
        </div>

        
    )
}

export default SettingCard;