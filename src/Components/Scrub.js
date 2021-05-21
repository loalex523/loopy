import React, {useState} from 'react'
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
            setState(prevState => ({...prevState, current: seekTime}))
            player.current.seekTo(state.seekTime, 'seconds')
            
        }
    }
    
    function handleSeekChange(e){
        setMouse(true)
        setState(prevState => ({...prevState, seekTime: e.target.value}))
    }

    const handleSeekMouseUp = e => {
        e.preventDefault()
        setMouse(false)
        setState(prevState => ({...prevState, seekTime: state.seekTime}))
        player.current.seekTo(state.seekTime, 'seconds')
    }

    return(<form onSubmit={handleSeek}>
        {/* <label>
            Seektime: 
            <input min="0" type="number" value={state.seekTime} onChange={handleSeekChange}/>
            <input type="submit" value="Submit"/>
        </label> */}
        <tr>
            <th>Seek</th>
            <td>
                <input
                type='range' min={0} max={state.duration}
                value={state.seekTime}
                // onMouseDown={this.handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
                />
            </td>
            <div>
                {mouseDown? <Time seconds={state.seekTime}/> : null}
            </div>
        </tr>
    </form>)
}

export default Scrub;