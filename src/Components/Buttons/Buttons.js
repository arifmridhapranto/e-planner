import React from 'react'
import './Buttons.css';

const Buttons = (props) => {
  return (
      <div>
          <button className='btn2'>
              { props.text}
          </button>
    </div>
  )
}

export default Buttons;


