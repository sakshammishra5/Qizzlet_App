import Option from "./Option"
import Question from "./Question"

const Parentbox = (props) => {

  const { result } = props

  const element = result.map((item,indx) =>

  (<>
    <Question question={item.question} result={result} />
    <Option incorrect_answers={item.incorrect_answers}  result={result} />
  </>)

  )

  return (
    <div>
      {element}
    </div>
  )
}

export default Parentbox