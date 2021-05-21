


export const addSetting = (url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops) =>{
    return{
        type: 'settings/stateAdded',
        payload: {url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops}
    }
}