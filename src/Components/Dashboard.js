import React from 'react'
import store from '../redux/store'
import { connect } from "react-redux";
import Player from './Player'

function Dashboard(){

    return(
        <div>
            <Player/>
        </div>
    )
}





export default connect()(Dashboard)