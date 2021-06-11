import React, {useState} from 'react'
import Time from "./Time";

function Scrub( { state, setState, player, validMedia } ){
    const [mouseDown, setMouse] = useState(false)

    // function handleSeek(e){
    //     e.preventDefault()
    //     let seekTime = state.seekTime
    //     if (seekTime > state.duration){
    //         console.log('Overexceeding value. Seeked to end of the video.')
    //         setState(prevState => ({...prevState, current: state.duration}))
    //         player.current.seekTo(state.duration, 'seconds')
    //     }
    //     else{
    //         setState(prevState => ({...prevState, current: state}))
    //         player.current.seekTo(state.seekTime, 'seconds')
            
    //     }
    // }
    
    function handleSeekChange(e){
        e.preventDefault()
        setMouse(true)
        player.current.seekTo(e.target.value, 'seconds')
        setState(prevState => ({...prevState, seekTime: e.target.value}))
    }

    function handleSeekMouseUp(e){
        e.preventDefault()
        setMouse(false)
        setState(prevState => ({...prevState, current: state.seekTime}))
    }

    return(
    <div>
        {/* <form onSubmit={handleSeek}>
                <label>
                    Seektime: 
                    <input min="0" type="number" value={state.seekTime} onChange={handleSeekChange}/>
                    <input type="submit" value="Submit"/>
                </label> 
        </form> */}
            <div>
            Seek: 
                <input
                type='range' min={0} max={state.duration}
                value={state.seekTime}
                className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
                // onMouseDown={this.handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
                />
                {mouseDown? <Time seconds={state.seekTime}/> : null}
            </div>
    </div>
    )
}

export default Scrub;