import React, {useState} from 'react'
import { connect } from "react-redux";
import Time from "./Time";

function Endpoint({state, player, setState }){
    const [current_EP, setEP] = useState(0)
    const [mouseDown, setMouse] = useState(false)
    function handleEndpoint(e){
        e.preventDefault()
        if (state.current_EP > state.duration || state.current_EP < state.seekTime){
            console.log('Invalid value for endpoint. Cannot set endpoint.');
        }
        else{
            console.log('Endpoint successfully handled.')
            setState(prevState => ({...prevState, endPoint: current_EP}))
        }
    }
    
    function handleEndpointChange(e){
        e.preventDefault()
        setMouse(true)
        setEP(e.target.value)
        if (current_EP > state.duration || current_EP < state.seekTime){
            console.log('Invalid value for endpoint. Cannot set endpoint.');
            // setEP(0)
            // setState(prevState => ({...prevState, endPoint: state.seekTime}))
            // player.current.seekTo(state.duration, 'seconds')
        }
        else{
            // console.log('Endpoint successfully handled.')
            setState(prevState => ({...prevState, endPoint: current_EP}))
        }
    }

    function handleEndpointMouseUp(e){
        e.preventDefault()
        setState(prevState => ({...prevState, endPoint: current_EP}))
        setMouse(false)
        // setState(prevState => ({...prevState, endPoint: current_EP}))
    }

    function handleEndpointMouseDown(e){
        setMouse(true)
        e.preventDefault()
        
    }
    return(
    <div>
        {/* <form onSubmit={handleEndpoint}>
                <label>
                    Enter Endpoint: 
                    <input min="0" type="number" value={state.endPoint} onChange={handleEndpointChange}/>
                    <input type="submit" value="Submit"/>
                </label> 
        </form> */}
        Endpoint: 
        <div>
            <input
            type='range' min={state.seekTime} max={state.duration}
            value={state.endPoint}
            // onMouseMove={handleEndpointMouseDown}
            onChange={handleEndpointChange}
            onMouseUp={handleEndpointMouseUp}
            />
        {mouseDown? <Time seconds={current_EP}/> : null}
        </div>
    </div>
   )
}

export default Endpoint;