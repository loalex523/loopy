import Time from './Time'
import React from 'react';
import { PlayerConsumer } from './PlayerContext'
import './Timestamp.css'



export default function Timestamp(){
    return (
        <PlayerConsumer>
            {
                (state) => {
                return(
                <div>
                    <div>
                        Id:
                        {state.id}
                    </div>
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
                        Seek Time:
                            <Time seconds={state.seekTime}/>
                    </div>
                    <div>
                        Loops:
                            {state.loops}
                    </div>
                    
                </div>
                )
                }
            }
        </PlayerConsumer>       
    )
}