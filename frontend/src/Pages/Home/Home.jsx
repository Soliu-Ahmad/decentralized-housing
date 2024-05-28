import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Content from '../../components/Content/Content'

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
         </div>
         <div>
            <Content />
         </div>
    </div>
  )
}

export default Home