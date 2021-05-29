import { combineReducers } from 'redux'
import currentReducer from './currentReducer'
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
  settings: settingsReducer,
  currentStatus: currentReducer
})

export default rootReducer