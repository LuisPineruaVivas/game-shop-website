import React from 'react'
import './NavListItem.css'

function SocialIcon({item}) {
  return (
    <li>
        <a href="#">
            <i className={item.icon}></i> 
        </a>
    </li>
  )
}

export default SocialIcon