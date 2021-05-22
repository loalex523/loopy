import React, {useRef, useState, useEffect} from 'react'
import { connect, useSelector } from 'react-redux'
import store from '../redux/store'


function SettingsList(){
    const settings = useSelector(state => state.settings.settings)
    
    return(
        <div>
            List of Settings: 
            {settings.map((setting) => (
                <button id={setting.id}>
                    {setting.url}
                </button>
            ))}
        </div>
    )   
}

export default connect()(SettingsList)