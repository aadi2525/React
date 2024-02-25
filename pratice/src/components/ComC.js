import React,{useContext, useState} from 'react'
import { AppState } from '../App'


const ComC = () => {
    const dataState = useContext(AppState);
  return (
    <div className='Com'>
        <div className='ComC'>
      <h1>aadi</h1>
      <h4>{dataState.data}</h4>
      <h4>{dataState.val.name}</h4>
      <h4>{dataState.val.age}</h4>
     
      </div>
    </div>
  )
}

export default ComC
