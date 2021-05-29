export const addSetting = (id, url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops) =>{
    return{
        type: 'settings/stateAdded',
        payload: {id, url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops}
    }
}