import { useState } from "react"
import Answer from "./answer"


const Options = (props) => {
  const { incorrect_answers, correct_answer } = props

 
  
  return (
    <div>{incorrect_answers.map((item, indx) => <Answer key={indx} optn={item} correct_answer={correct_answer} incorrect_answers={incorrect_answers} />)}</div>
    )
}

// if(ev.target.innerText==correct_answer){
//   console.log("sahi ans")
// }
// if(ev.target.className=="optn"){
//  console.log( ev.target.attributes.alagattr)
//   if(ev.target.attributes.alagattr.value==optnStatus){
//     setoptnStatus((prev)=>prev="selected_ans")
//     if(ev.target.attributes.alagattr.value=="selected_ans"){
//       ev.target.classList.add("selected_ans")
//     }
//   }
// }

export default Options