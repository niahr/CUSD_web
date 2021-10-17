import * as React from "react"
import Parallax from '../projectscomponents/parallax'
import { Link } from "gatsby"
import ProjectList from '../projectscomponents/project'
import Nav from '../components/nav'

// markup

const projects = [{id: 1, name: 'Sustainable Education Nepal', subtitle: 'CUSD x United World Schools'},
                  {id: 2, name: 'ARC', subtitle: 'Alternative Recycling Cornell'}]

const ProjectPage = () => {
  return (
    <main>
      <Nav/>
      <ProjectList projects={projects} />
    </main>
  )
}

export default ProjectPage