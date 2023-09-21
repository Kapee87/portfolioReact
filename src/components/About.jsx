import React from 'react'

function About() {
  return (
    <section className="hero min-h-screen bg-hero-background" id='#about'>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="rounded-[40px] bg-indigo-600 bg-opacity-50 backdrop-blur-sm glass w-2/3 p-10 text-2xl text-slate-300">
        <h2 className='text-4xl mb-5 border-b-2 border-b-indigo-400'>About me | Sobre mí</h2>
        <p>🔭 I am currently working on personal and freelance projects, in addition to small projects with a self-managed community organization in which we are focusing on learning, especially how to organize ourselves with teamwork.</p>
        <p>🌱 I’m currently practicing my skills on React.js, Mongo DB and Node.js with Express for fullstack applications.</p>
        <br />
        <p>🔭 Actualmente estoy trabajando en proyectos personales y freelance, además de pequeños proyectos con una organización comunitaria autogestionada en la que nos estamos centrando en aprender, sobre todo a organizarnos con trabajo en equipo.</p>
        <p>🌱 Actualmente estoy poniendo en práctica lo aprendido sobre React.js, Mongo DB y Node.js con Express para aplicaciones fullstack.</p>
      </div>
    </section>
  )
}

export default About