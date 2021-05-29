const initialState = {
    settings: []
}

function nextSettingId(setting) {
    const maxId = setting.reduce((maxId, setting) => Math.max(setting.id, maxId), -1)
    return maxId + 1
  }

export default function stateReducer(state = initialState, action){
    switch(action.type){
        case 'settings/stateAdded':{
            // const { url, pip, playing, controls, light, loop, volume, duration, playbackRate, current, seekTime, endPoint, loops } = action.payload
            return {
                ...state,
                settings: [
                    ...state.settings,
                    {
                        // id: nextSettingId(state.settings),
                        id: action.payload.id,
                        url: action.payload.url,
                        pip: action.payload.pip,
                        playing: action.payload.playing,
                        controls: action.payload.controls,
                        light: action.payload.light,
                        loop: action.payload.loop,
                        volume: action.payload.volumne,
                        duration: action.payload.duration,
                        playbackRate: action.payload.playbackRate,
                        current: action.payload.current,
                        seekTime: action.payload.seekTime,
                        endPoint: action.payload.endPoint,
                        loops: action.payload.loops
                    }
                ]
            }
        }
        default:
            return state
    }

}




/**
     * const someAction = {
     type: "Test",
    payload: {user: "Test User", age: 25},
    }
 */