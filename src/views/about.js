import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Creative Agency Page</title>
        <meta property="og:title" content="About - Creative Agency Page" />
      </Helmet>
      <div className="about-container1">
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
      </div>
      <div className="about-container2">
        <div className="about-container3">
          <img
            src="https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?ixid=Mnw5MTMyMXwwfDF8YWxsfDM3fHx8fHx8Mnx8MTY4MDY4OTczMA&amp;ixlib=rb-4.0.3&amp;w=400"
            alt="image"
            className="about-image"
          />
        </div>
      </div>
    </div>
  )
}

export default About
