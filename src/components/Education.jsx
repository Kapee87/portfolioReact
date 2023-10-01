import React from 'react'
import mockEducation from '../utils/mockEducation.json'
import EducationComponent from './EducationComponent.jsx'

function Education() {
  
  return (
    <section className="hero relative min-h-screen h-fit flex flex-col md:pt-8 mb-14" id='#education'>
      <h2 className='py-5 mt-20 px-20 md:px-10 w-full md:w-1/3 sm:mt-24 md:mt-20 text-2xl text-white  text-center bg-black bg-opacity-80  shadow-2xl md:text-3xl md:rounded-2xl '>Educación, cursos y certificaciones</h2>
      <div className='flex flex-wrap justify-center gap-5 items-center px-40 mt-5 [perspective:100px]'>
        {
          mockEducation.map(({ id, name, content, preview, url }) => {
            return (
              <EducationComponent key={id} prop={{ name, content, preview, url }} />
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default Education