import React, {useState} from 'react'
import Time from "./Time";

function Endpoint({state, player, setState }){
    const [current_EP, setEP] = useState(0)
    const [mouseDown, setMouse] = useState(false)
    // function handleEndpoint(e){
    //     e.preventDefault()
    //     if (state.current_EP > state.duration || state.current_EP < state.seekTime){
    //         console.log('Invalid value for endpoint. Cannot set endpoint.');
    //     }
    //     else{
    //         console.log('Endpoint successfully handled.')
    //         setState(prevState => ({...prevState, endPoint: current_EP}))
    //     }
    // }
    
    function handleEndpointChange(e){
        e.preventDefault()
        setMouse(true)
        setEP(e.target.value)
        setState(prevState => ({...prevState, endPoint: current_EP}))
        // if (current_EP > state.duration || current_EP < state.seekTime){
        //     console.log('Invalid value for endpoint. Cannot set endpoint.');
        //     // setEP(0)
        //     // setState(prevState => ({...prevState, endPoint: state.seekTime}))
        //     // player.current.seekTo(state.duration, 'seconds')
        // }
        // else{
        //     setState(prevState => ({...prevState, endPoint: current_EP}))
        // }
    }

    function handleEndpointMouseUp(e){
        e.preventDefault()
        setMouse(false)
        // setState(prevState => ({...prevState, endPoint: current_EP}))
    }

    // function handleEndpointMouseDown(){
    //     setState(prevState => ({...prevState, endPoint: seekTime}))
    //     setMouse(false)
    // }
    return(
    <div>
        {/* <form onSubmit={handleEndpoint}>
                <label>
                    Enter Endpoint: 
                    <input min="0" type="number" value={state.endPoint} onChange={handleEndpointChange}/>
                    <input type="submit" value="Submit"/>
                </label> 
        </form> */}
        <div>
        Endpoint: 
            <input
            className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
            type='range' min={state.seekTime} max={state.duration}
            value={state.endPoint}
            // onMouseMove={handleEndpointMouseDown}
            onChange={handleEndpointChange}
            onMouseUp={handleEndpointMouseUp}
            />
        {mouseDown? <Time seconds={state.endPoint}/> : null}
        </div>
    </div>
   )
}

export default Endpoint;