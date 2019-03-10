import React from 'react'
import './Buttons.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props => 
  <div className='buttons fadein'>
    
    <div className='button'>
      <label htmlFor='single'>
        {/* <img src="http://cdn.onlinewebfonts.com/svg/img_148071.png" alt="" color='#3B5998' size='10x' /> */}
        <i className="far fa-image fa-10x" />
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>

    <div className='button'>
      <label htmlFor='multi'>
        {/* <img src="http://cdn.onlinewebfonts.com/svg/img_148071.png" alt="" color='#6d84b4' size='10x' /> */}
        <i className="far fa-images fa-10x"/>
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>

  </div>