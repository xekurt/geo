import { createStore } from 'redux'
import reducer from './driverSlice'

const store = createStore(reducer)

export default store
