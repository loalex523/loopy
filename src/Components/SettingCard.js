import React, {useState} from 'react'


function SettingCard( {setting, setState, player} ){
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
        }))
        player.current.seekTo(setting.seekTime,'seconds')
    }

    return(
        <button onClick={handleClick}>
            {setting.url}
        </button>

    )
}

export default SettingCard;