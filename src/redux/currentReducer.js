const initialState = {
    currentStatus: {
        url: "https://www.youtube.com/watch?v=Ce6so35INYU&ab_channel=JangYoon-ju-TopicJangYoon-ju-Topic",
        pip: false,
        playing: true,
        controls: false,
        light: false,
        loop: false,
        volume: 0.8,
        duration: 0,
        playbackRate: 1.0,
        current: 0,
        seekTime: 0,
        endPoint: 0,
        loops: 0
    }
}


export default function currentReducer(state = initialState, action){
    switch(action.type){
        case 'current/changeCurrent': {
            return{ 
                currentStatus:{
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
            }
        }
        default:
            return state

    }
}
