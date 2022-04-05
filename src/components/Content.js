import React, { useEffect, useState } from 'react'
import Details from './Details'
import Map from './Map'

import { useSelector } from 'react-redux'

const Content = () => {
  const [locationData, setLocationData] = useState([])
  const reduxData = useSelector(state => state)

  useEffect(() => {
    if (reduxData.length !== 0) {
      let tempArr = []
      reduxData.forEach(item => {
        tempArr.push(item)
      })
      setLocationData(prevState => tempArr)
    }
  }, [reduxData])

  console.info({ locationData })
  return (
    <section className="container">
      <Map locations={locationData} />
      <Details info={locationData} />
    </section>
  )
}

export default Content
