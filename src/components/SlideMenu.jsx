import React, { useState } from 'react'
import './SlideMenu.css'
import navListData from '../data/NavListData'
import NavListItem from './NavListItem'
import socialListData from '../data/SocialListData'
import SocialIcon from './SocialIcon'

function SlideMenu({active, sectionActive}) {
    const [navData, setNavData] = useState(navListData)
    const [socialData, setSocialData] = useState(socialListData)

    const handleNavOnClick = (id, target) => {
        const newNavData = navData.map(nav => {
            nav.active = false;
            if(nav._id === id) nav.active = true;
            return nav;
        })
        setNavData(newNavData);
        sectionActive(target);
    }

  return (
    <div className={`slideMenu ${active ? 'active':undefined}`}>
        <a href="#" className="logo"> 
            <i className="bi bi-controller"></i>
            <span className='brand'> NextGames  </span>
        </a>
        <ul className='nav'>
            {
                navData.map(item => (
                    <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick}/>
                ))
            }  
        </ul>
        <ul className='social'>
            {
                socialData.map(item => (
                    <SocialIcon key={item._id} item={item} />
                ))
            }  
        </ul>
    </div>
  )
}

export default SlideMenu