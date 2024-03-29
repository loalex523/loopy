import React from 'react'
import { connect, useSelector } from 'react-redux'
import SettingCard from './SettingCard'

function SettingsList({setState, player, setValid}){
    const settings = useSelector(state => state.settings.settings)
    return(
    
        <div className="divide-y font-semibold text-center bg-white divide-gray-200 p-5 divide rounded-md shadow-md flex-row justify-between w-2/3">
            Timeframes
            {settings.length > 0?  settings.map((setting, index) => (
                    <SettingCard key={setting.id} setValid={setValid} setState={setState} setting={setting} player={player}/>
                ))
            : <div> You currently do not have any timeframes saved. </div>}
            
        </div>
    )   
}

export default connect()(SettingsList)