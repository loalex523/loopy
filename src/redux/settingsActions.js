export const addSetting = (id, url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops) =>{
    return{
        type: 'settings/stateAdded',
        payload: {id, url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops}
    }
}

export const removeSetting = (id) =>{
    return{
        type: 'settings/stateRemove',
        payload: {id}
    }
}