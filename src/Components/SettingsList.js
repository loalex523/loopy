import React, {useRef, useState, useEffect} from 'react'
import { connect, useSelector } from 'react-redux'
import store from '../redux/store'
import SettingCard from './SettingCard'

function SettingsList({setState, player}){
    const settings = useSelector(state => state.settings.settings)
    return(
        <div>
            List of Settings: 
            {settings.map((setting) => (
                <SettingCard key={setting.id} setState={setState} setting={setting} player={player} />
            ))}
        </div>
    )   
}

export default connect()(SettingsList)