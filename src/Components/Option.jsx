
const Option = (props) => {
    const {incorrect_answers,result}=props
    const option=result.map((item,indx)=>item)
  return (
    <div>
        {
            incorrect_answers
        }
    </div>
  )
}

export default Option