import Particles from '@/Components/Animating/Particles'
import Project from '@/Components/pages/project'
import React from 'react'

const page = () => {
  return (
    <div className='relative overflow-hidden'>
       <Particles />
    <div className='relative z-10'>
      <Project/>
     
    </div>
    </div>
  )
}

export default page
