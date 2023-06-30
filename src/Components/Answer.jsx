import { useState } from 'react'
import './styles/Particularans.css'

const Answer = (props) => {
  const{optn,correct_answer,incorrect_answers}=props
  const [selected, setselected] = useState('not_selected')
  
  
  function Handleonclick(ev) {
    // console.log(ev.target.attributes.selectedornot.value)
    // incorrect_answers.map((item)=>console.log(item))
    // console.log(ev.target.parentElement.childNodes[0].attributes.selectedornot.value)
    // console.log(ev.target.parentElement.childNodes[0].NodeList)
  }
  return (
    <div className='optn' selectedornot={selected} onClick={Handleonclick} >
        {optn}
    </div>
  )
}

export default Answer