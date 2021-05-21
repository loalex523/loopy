import Time from './Time'
import React from 'react';



export default function Timestamp ({state}){
    return (
        <div>
            <div>
                Duration:
                <Time seconds={state.duration}/>
            </div>
            <div>
                Current:
                <Time seconds={state.current}/>
            </div>
            <div>
                Endpoint:
                <Time seconds={state.endPoint}/>
            </div>
            <div>
                Loops:
                    {state.loops}
            </div>
        </div>
              
    )
}