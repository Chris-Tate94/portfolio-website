import React from 'react'
import Resume from '../../assets/Chris_Tate_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href= {Resume} download className='btn'>Downlaod Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA