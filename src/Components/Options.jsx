import { useContext, useState } from "react"
import { nanoid } from 'nanoid'
import Answer from "./answer"


const Options = (props) => {
  const { incorrect_answers, correct_answer} = props
  let optnArr=[]
  const [selected, setselected] = useState(optnArr)
  
  
  function handleonclick(ev){
    setselected((prevstate)=>prevstate.map(item=>{
     return item.id===ev.target.id?{...item,picked:"true"}:item
    }))
    addclass()
   }

   
   function addclass(){
  setselected((prevstate)=>prevstate.map(item=>{
    return item.picked==="true"?{...item,className:"select_hogya"}:item
   }))
}
   optnArr=incorrect_answers.map((item, indx) =>
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