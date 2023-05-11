import * as React from 'react'
import { useState } from 'react'
import '../styles/Projects.css'

export default function Projects() {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='gallery'>
      <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
        hej
      </div>
      <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
        hej
      </div>
      <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
        hej
      </div>
    </div>
  )
}
