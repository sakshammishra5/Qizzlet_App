import axios from "axios"
import { useEffect } from "react"
import Parentbox from "./Parentbox"
import "./styles/parent.css"

const Quizpage = (props) => {
  const { baaphu } = props

  console.log(globalThis.FormData)
  useEffect(() => {
    apicalling()
  }, [])

 async function apicalling(){
  axios.get(`https://opentdb.com/api.php?amount=${globalThis.FormData.question}&difficulty=${globalThis.FormData.difficulty}&type=${globalThis.FormData.types}`)
  .then(function (response) {
    console.log(response.data.results)
  })
  .catch(function (error) {
    console.log(error);
  })
  }

  return (
    <div>
      <h1>Quizz App</h1>
      <Parentbox className="parentbox"/>
    </div>
  )
}

export default Quizpage