import Profile from '@/Components/pages/profile'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>

<Head>
  <title>Mayuru Maduranga | Full Stack Developer</title>
  <meta name="description" content="Official portfolio of Mayuru Maduranga, Full Stack Developer with expertise in MERN stack, Next.js, and more." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="Mayuru Maduranga, Portfolio, Full Stack Developer, MERN, Next.js, Web Developer, Sri Lanka" />
  <meta name="author" content="Mayuru Maduranga" />
  <meta property="og:title" content="Mayuru Maduranga | Portfolio" />
  <meta property="og:description" content="Explore my portfolio and projects built with Next.js, React, MongoDB, and more." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mayuru-portfolio.vercel.app" />
  <meta property="og:image" content="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mayuru Maduranga Portfolio" />
  <meta name="twitter:description" content="Full Stack Developer | MERN | Next.js" />
  <meta name="twitter:image" content="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png" />
</Head>

    <div>
      <Profile/>
    </div>
    </>
  )
}

export default page
