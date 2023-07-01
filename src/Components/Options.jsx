import { useContext, useState } from "react"
import { nanoid } from 'nanoid'
import Answer from "./answer"


const Options = (props) => {
  const { incorrect_answers, correct_answer} = props
  const [selected, setSelected] = useState(false)

  function handleonclick(ev){
   }
    

  
  let optnArr=incorrect_answers.map((item, indx) =>
   <Answer
    key={indx}
    value={item}
    id={nanoid()} 
    correct_answer={correct_answer} 
    incorrect_answers={incorrect_answers} 
    handleonclick={handleonclick}
    picked={selected}
     />)
  
  return (
    <div>
      {optnArr}
    </div>
    )
}


export default Options