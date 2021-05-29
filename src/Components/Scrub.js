import React, {useState, useEffect} from 'react'
import Time from "./Time";

function Scrub( { state, setState, player } ){
    const [mouseDown, setMouse] = useState(false)

    function handleSeek(e){
        e.preventDefault()
        let seekTime = state.seekTime
        if (seekTime > state.duration){
            console.log('Overexceeding value. Seeked to end of the video.')
            setState(prevState => ({...prevState, current: state.duration}))
            player.current.seekTo(state.duration, 'seconds')
        }
        else{
            setState(prevState => ({...prevState, current: state}))
            player.current.seekTo(state.seekTime, 'seconds')
            
        }
    }
    
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
        <form className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" onSubmit={handleSeek}>
                <label>
                    Seektime: 
                    <input min="0" type="number" value={state.seekTime} onChange={handleSeekChange}/>
                    <input type="submit" value="Submit"/>
                </label> 
        </form>
            Seek: 
            <div>
                <input
                type='range' min={0} max={state.duration}
                value={state.seekTime}
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