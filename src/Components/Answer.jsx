import { useState } from 'react'
import './styles/Particularans.css'

const Answer = (props) => {
  const { optn, correct_answer, incorrect_answers } = props
  const [selected, setselected] = useState('not_selected')

  function Handleonclick(ev) {
    if (ev.target.className == "optn") {
      console.log( ev.target.attributes.selectedornot.value)
      ev.target.attributes.selectedornot.value=setselected("selected_ans")
    }
    addclass(ev)
  }
  
  function addclass(ev) {
    if (selected == "selected_ans") {
      ev.target.classList.add("selected_ans")
    }
    else if(selected=="not_selected"){
      ev.target.classList.remove("selected_ans")
    }

  }

  return (
    <div className='optn' selectedornot={selected} onClick={Handleonclick} >
      {optn}
    </div>
  )
}


  export default Answer