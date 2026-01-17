import Particles from '@/Components/Animating/Particles'
import Services from '@/Components/Services/Services'
import React from 'react'

const page = () => {
  return (
    <div className='relative overflow-hidden'>
      <Particles />

      <div className='relative z-10'>
        <Services/>
      </div>
      
      
    </div>
  )
}

export default page
