import React from 'react'
import ME from "../../assets/gym.JPG";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Coding Experience</small>
            </article>
          
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>Web Development Diploma Lighthouse Labs</small>
            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Over 30 completed projects</small>
            </article>
          </div>

          <p>I have always been passionate about building things, and with the growth of the technological industry, I decided to dive in head first and lean to code. This led me to look at coding programs such as Lighthouse Labs, Canada's leading software development boot camp. After twelve grueling weeks of late nights and early mornings, I graduated with the confidence that no challenge is insurmountable.</p>

          <p>I am looking for a Junior Developer opportunity so I can begin my career as a programmer. My hard work, dedication, consistency, eagerness to learn, ability to multitask and prioritization skills will help me succeed in any work environment.</p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About