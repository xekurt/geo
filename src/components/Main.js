import React, { useEffect } from 'react'
import mqtt from 'mqtt/dist/mqtt'
import Content from './Content'

// REDUX IMPORTS
import { useDispatch } from 'react-redux'
import { saveData } from '../store/driverSlice'

// THIS COMPONENT IS RESPONSIBLE FOR GETTING DATA FROM SERVER AND SAVING IT TO REDUX STORE
function Main() {
  const dispatch = useDispatch()

  const getDataFromServer = () => {
    const options = {
      username: 'server',
      password: 'server_dashboard',
      topic: '/optime/test-front/'
    }
    const client = mqtt.connect('wss://mqtt.optime-infra.ir/ws', options)
    client.on('connect', function (topic, message) {
      client.subscribe(options.topic)
    })
    client.on('message', function (topic, message) {
      const data = prepareData(message)
      saveDataToRedux(saveData, data)
    })
  }
  const prepareData = data => {
    const rawData = data.toString()
    const producedData = rawData.replace(/'/g, '"')
    return JSON.parse(producedData)
  }
  const saveDataToRedux = (actions, data) => {
    dispatch(actions(data))
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return <Content />
}

export default Main
