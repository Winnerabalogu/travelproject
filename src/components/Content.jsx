/* eslint-disable react/prop-types */
import React from 'react'

export default function Content(props) {
  return (
    <div className='content'>
    <img src={props.items.img} className='contentImg'/>
    <div className='content-description'>
      <div className='location-wrapper'>
        <img src={props.items.icon} className='icon'/>
        <h3 className='locationdata'>{props.items.country}</h3>
        <a href={props.items.locationlink}>Click to open map</a>
      </div>
      <h2 className='travelspot'>{props.items.location}</h2>
      <h3 className='traveldate'>{props.items.traveldate}</h3>
      <h4 className='summary'>{props.items.summary}</h4>
    </div>
  </div>
  
  )
}

