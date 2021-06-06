import React from 'react'
import { connect } from "react-redux";
import Player from './Player'
import Header from './Header'
function Dashboard(){

    return(
        <div className="font-mono flex flex-col text-center items-center">
            <Header/>
            <Player/>
        </div>
    )
}





export default connect()(Dashboard)