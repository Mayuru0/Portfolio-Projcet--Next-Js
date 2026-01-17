import Particles from '@/Components/Animating/Particles'
import Contact from '@/Components/pages/Contact'
import React from 'react'

const page = () => {
  return (
    <div className='relative overflow-hidden'>
        <Particles />
    <div className='relative z-10'>
      <Contact/>
    
    </div>
    </div>
  )
}

export default page
