import React, {useState} from 'react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import './gameSwiper.css'
import GameSlide from './GameSlide';

function GameSwiper({games}) {
    const [active, setActive] = useState(false);

    const handleToggleVideo = () => {
        setActive(!active);
    };


  return (
    <>

    <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     navigation={true}
     slidesPerView={'auto'}
     coverflowEffect={{
        rotate: 35,
        stretch:200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
     }}
     autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
     pagination={false}
     loop={true}
     modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
     className="gameSwiper"
     >
     {
        games.map(game => (
            <SwiperSlide key={game._id}>
                <GameSlide
                    game={game} active={active} toggleVideo={handleToggleVideo}
                />
            </SwiperSlide>
        ))
     }
    </Swiper>
    
    
    </>

  )
}

export default GameSwiper