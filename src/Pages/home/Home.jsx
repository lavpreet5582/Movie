import React from 'react'
import './Home.scss'
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='home'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home