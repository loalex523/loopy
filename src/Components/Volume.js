import React, {useState} from 'react'

function Volume( {state, setState, player, validMedia} ){
    const [mouseDown, setMouse] = useState(false)

    function handleVolumeChange(e){
        e.preventDefault()
        setMouse(true)
        setState(prevState => ({...prevState, volume: e.target.value}))
    }

    function handleVolumeMouseUp(e){
        e.preventDefault()
        setMouse(false)
    }
    return(
        <div>
            Volume: 
            <input
            type='range' min={0} max={1.0}
            step={.1}
            value={state.volume}
            className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
            // onMouseDown={this.handleSeekMouseDown}
            onChange={handleVolumeChange}
            onMouseUp={handleVolumeMouseUp}
            />
            {mouseDown? <level> {state.volume} </level> : null}
        </div>
    )
}

export default Volume;
