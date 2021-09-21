import React from 'react'
import halo from '../images/hal.png'
import foldables from '../images/foldables.png'
import loremfoods from '../images/loremfoods.png'
import mojin from '../images/mojin.png'
import swapii from '../images/swapii.png'
import todo from '../images/todo-app.png'

function Projects() {

  const _projects = [
    {
      pic: todo,
      title: 'Todo App',
      desc: 'A simple Todo Application',
      url: 'https://khal-todo-app.netlify.app'
    },
    {
      pic: halo,
      title: 'Halo',
      desc: 'A Software Development company\'s portfolio.',
      url: 'https://halosite.netlify.app'
    },
    {
      pic: swapii,
      title: 'Todo App',
      desc: 'An app that fetches data from star wars API',
      url: 'https://swapii.netlify.app'
    },
    {
      pic: foldables,
      title: 'Foldables',
      desc: 'An e-commerce app for cakes',
      url: 'https://foldables.netlify.app'
    },
    {
      pic: loremfoods,
      title: 'Lorem foods',
      desc: 'An online food delivery webpage',
      url: 'https://loremfoods.netlify.app'
    },
    {
      pic: mojin,
      title: 'Mojin',
      desc: 'A software development company website.',
      url: 'https://khal.netlify.app'
    }
  ]
  return (
    <div className="projects-page container">
      <h2>My projects</h2>

      <div className="projects d-flex flex-row justify-content-around flex-wrap">
        {_projects.map(project => (
          <div class="card" style={{width: "18rem"}}>
            <img src={project.pic} className="card-img-top" />
            <div class="card-body">
            <h5 class="card-title">{project.title}</h5>
            <p class="card-text">
              {project.desc}.
            </p>
            <a href={project.url} class="btn btn-primary">View site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
