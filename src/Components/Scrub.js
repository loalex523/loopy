import React, {useRef, useState} from 'react'
import ReactPlayer from 'react-player'

function Scrub({player, seekTime, handleSeek, handleSeekChange}){
    return(<form onSubmit={handleSeek}>
        <label>
            Time: 
            <input type="number" value={seekTime} onChange={handleSeekChange}/>
            <input type="submit" value="Submit"/>
        </label>
    </form>)
}

export default Scrub;