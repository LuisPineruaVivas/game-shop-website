import React, {useState, useRef, useContext} from 'react'
import { AppContext } from '../App'
import './Main.css'
import SlideMenu from '../components/SlideMenu'
import Header from '../components/Header'
import Home from './Home';
import GameData from '../data/GamesData';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';

function Main() {
  const {library, bag} = useContext(AppContext)
  const [active, setActive] = useState(false);
  const [games] = useState(GameData);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false
    },
    {
      name: 'bag',
      ref: bagRef,
      active: false
    },
  ]

  const handleToggleActive = () => {
    setActive(!active)
  };

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if(section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section
    })
  }

  return (
    <main>
        <SlideMenu active={active} sectionActive={handleSectionActive}/>
            <div className={`banner ${active ? 'active' : undefined}`}>
                <Header toggleActive={handleToggleActive}/>
                <div className="container-fluid">
                  {games && games.length>0 && (
                    <>
                    <Home games={games} reference={homeRef}/>
                    <Categories games={games} reference={categoriesRef}/>
                    <MyLibrary games={library} reference={libraryRef}/>
                    <Bag games={bag} reference={bagRef}/>
                    </>
                  )}
                </div>

        </div>
    </main>
  )
}

export default Main