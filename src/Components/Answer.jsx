import { useState } from 'react'
import './styles/Particularans.css'

const Answer = (props) => {
  const {id,value,picked, correct_answer, incorrect_answers,handleonclick } = props

  return (
    <div className='optn' id={id} onClick={handleonclick} picked={picked.toString()}>
      {value}
    </div>
  )
}


  export default Answer