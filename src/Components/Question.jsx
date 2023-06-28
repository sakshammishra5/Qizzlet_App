
const Question = (props) => {
    const {question,result}=props
    
    // const question=result.map((item,index)=>{item.question})
  return (
    <div>
        {question}
    </div>
  )
}

export default Question