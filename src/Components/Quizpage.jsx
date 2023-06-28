import axios from "axios"
import { useEffect } from "react"
import Renderquiz from "./Renderquiz"
// import form_ki_setting from "../App"
// import formData from "./Startpage"

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
      <Renderquiz/>
    </div>
  )
}

export default Quizpage