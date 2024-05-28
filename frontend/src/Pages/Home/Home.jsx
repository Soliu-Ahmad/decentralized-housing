import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Faqs from '../../components/Faqs/Faqs'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <Faqs />
        </div>
    </div>
  )
}

export default Home