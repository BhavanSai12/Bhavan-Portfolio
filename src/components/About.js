import React from 'react'
// eslint-disable-next-line no-unused-vars
import { FaBootstrap } from 'react-icons/fa'
import { SiJava } from 'react-icons/si'

import resume from '../assets/Bhavan Sai Ballimpalli.pdf'

const About = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
      I have expertise in DevOps tools and web development technologies, as well as experience with the software development life cycle (SDLC). DevOps tools are used to automate and streamline the processes involved in the development, testing, and delivery of software. Web development technologies refer to the various tools and frameworks used to build and maintain websites and web applications. The SDLC is a systematic approach to the development of software, involving activities such as planning, analysis, design, implementation, testing, and maintenance.
        {/* Apart form this, i'm learning flutter for my final year project (FYP) */}
      </p>
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</a>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <p className='lead'>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linux/linux-plain.svg" alt="Linux" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/ansible/ansible-original.svg" alt="Ansible" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg" alt="Docker" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" alt="Github" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jenkins/jenkins-original.svg" alt="Jenkins" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jira/jira-original.svg" alt="Jira" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/terraform/terraform-original.svg" alt="Terraform" width="40" height="40"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="35" height="35"/>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/intellij/intellij-original.svg" alt="Intellji" width="40" height="40"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="35" height="35"/>
        <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f5'}}/>
        {/* <img className='ms-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" width="30" height="35"/> */}
      </p>
      <h3 className="pt-3 pb-2 custom-color">Currently Learning: </h3>
      <p className='lead fw-bold' style={{color: '#53c1f2'}}><SiJava className='m-2' style={{width:"35", height:"35", color: '#53c1f2'}}/>Java</p>
      
    </div>
  )
}

export default About