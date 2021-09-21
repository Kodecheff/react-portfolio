import React from 'react'

function Home() {
  return (
    <div className="homepage container">
      <h6>Hi 👋 my name is</h6>
      <h1>Pascal Akunne.</h1>
      <h1 style={{color: 'orange'}}>I build web applications</h1>
      {/* <p className="title">JavaScript Developer & Technical Writer</p> */}

      <p>
        I’m a software developer with passion for building scalable web applications. Currently, I’m focused on building 
        accessible, human-centered products. Welcome to my turf on the internet where I share my side projects I've been 
        working on. You can check out my <a href="https://github.com/kodecheff">Github</a> for my personal code.
      </p>

      <h3>Writing ✍️</h3>
      <p>
        I occasionally writing technical articles on <a href="https://kodecheff.hashnode.dev">Hashnode</a>, 
        which is a way I give back to the community. I am also a seasoned author at 
        <a href="https://a11yproject.com">a11yproject.com</a> where I research and document about web accessibility.
      </p>
    </div>
  )
}

export default Home;
