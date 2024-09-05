import React from 'react'

import Work from './Content/Work'
import bg from '../../assets/9QR6qz.gif';

function About() {
  return (

    <div>
        <div
        className='bg-cover bg-center h-full opacity-85'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Work />
      </div>
        
    </div>
  )
}

export default About
