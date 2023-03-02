import React from 'react'
import './Card.css'

const Card = ({phrase, changePhrase,im}) => {


  return (
    <div>
      <div className='container_img'>
      <img src={im} alt='fondo' />
      </div>
       <div className='container_pla'>
         {phrase.phrase}
         <br />
          <span>  🧠 </span>
          {phrase.author}
        </div>
        <div className= 'buttonC'>
          <button onClick={changePhrase} >
          <span>🕸 </span>
            <span>Next</span>
            <span> 🕸</span>
          </button>
       </div>
    </div>
  )
}

export default Card