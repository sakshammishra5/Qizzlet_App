import Answer from "./answer"

const Options = (props) => {
    const {incorrect_answers}=props
  return (
    <div>{incorrect_answers.map((item)=><Answer ans={item}/>)}</div>
  )
}

export default Options