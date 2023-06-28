import { useState } from "react"
import Startpage from "./Components/Startpage"
import Quizpage from "./Components/Quizpage"

const App = () => {
 
  const [isplaying, setisplaying] = useState(false)

  function startGame(){
    setisplaying(true)
  }
  
  function baaphu(form_ki_setting){
  return form_ki_setting
  }




  return (
    <div>
      {
        !isplaying && <Startpage startGame={startGame} baaphu={baaphu} />
      }
      {
        isplaying && <Quizpage baaphu={baaphu} />
      }
    </div>
  )
}

export default App