import { useContext, useState } from "react"
import { nanoid } from 'nanoid'
import Answer from "./answer"


const Options = (props) => {
  const { incorrect_answers, correct_answer} = props
  const [selected, setselected] = useState(optnArr)
  
  
  function handleonclick(ev){
    setselected((prevstate)=>prevstate.map(item=>{
     return item.id===ev.target.id?{...item,picked:"true"}:item
    }))
   }
   
   function addclass(){
    if(selected.picked==="true"){
      return "selected"
    }
   }
  
  let optnArr=incorrect_answers.map((item, indx) =>
   <Answer
    key={indx}
    value={item}
    id={nanoid()} 
    correct_answer={correct_answer} 
    incorrect_answers={incorrect_answers} 
    handleonclick={handleonclick}
    picked="false"
     />)
  
  return (
    <div>
      {optnArr}
    </div>
    )
}


export default Options