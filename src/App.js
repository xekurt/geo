import React from 'react'
import Main from './components/Main'
// REDUX IMPORTS
import { Provider } from 'react-redux'
import store from './store/store'
import './styles.css'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
