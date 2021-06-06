export const changeState = (url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops) =>{
    return{
        type: 'current/changeCurrent',
        payload: {url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops}
    }
}

