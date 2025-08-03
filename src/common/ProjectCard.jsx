import React from 'react'

function ProjectCard( { src }) {
  return (
       <a href="https://github.com/Dontbeshy27/MINI-1-"
    target="_blank">
        <img className="hover" src={src} alt="Viberr logo" />
    <h3>Clone of Dropbox Website</h3>
    <p>This is the Mini Project1 from Kodego </p>
    </a> 


  )
}

export default ProjectCard