import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ locations }) => {
  useEffect(() => {
    const interval = setInterval(() => {}, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="map__section">
      <MapContainer center={[35.68, 51.38]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((item, index) => {
          return (
            <Marker position={[item.latitude, item.longitude]} key={index}>
              <Popup>
                نام : {item.name}
                <br />
                تلفن : {item.phone_number}
                <br />
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default Map
