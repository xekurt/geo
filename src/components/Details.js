import React from 'react'

// Accepts a info object in order to render drivers info on screen
const Details = ({ info }) => {
  //
  const renderInfo = drivers => {
    return drivers.map(driver => {
      const { id, address, name, phone_number, regions, latitude, longitude } = driver
      return (
        <div key={id} className="details__wrapper">
          <h4>نام : {name}</h4>
          <h4>شماره تماس : {phone_number}</h4>
          <p>آدرس : {address}</p>
          <ul>
            محله ها :
            {regions.map(region => {
              return <li key={region.region_id}>{region.region_name}</li>
            })}
          </ul>
          <p>{`مکان فعلی  : ${latitude} ,${longitude}`}</p>
        </div>
      )
    })
  }
  return <div className="details__section">{renderInfo(info)}</div>
}

export default Details
