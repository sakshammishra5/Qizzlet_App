import { createContext, useState } from "react"
import Quizpage from "./Quizpage"

const Startpage = (props) => {
    const { startGame, baaphu } = props
    
    const [settingForm, setsettingForm] = useState({ question: "", difficulty: "", types: "" })
    globalThis.FormData=settingForm

    function onChangeHandler(ev) {
        setsettingForm((prevstate) => {
            return {
                ...prevstate,
                [ev.target.name]: ev.target.value
            }
        })
    }
    // console.log(settingForm)


    function onSubmitHandler(ev) {
        ev.preventDefault()
        baaphu(settingForm)
        startGame()
    }

    return (
        <>
        {/* <formData.Provider value={settingForm}>
         <Quizpage/>
        </formData.Provider> */}
            <div>
                <h2>Game Setting</h2>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="questions">Number of Question</label>
                    <input type="text" id="questions" name="question" value={settingForm.question}
                        onChange={onChangeHandler} /><br />

                    <label htmlFor="difficulty">Select the Difficulty Level</label>
                    <input type="text" id="difficulty" name="difficulty" value={settingForm.difficulty}
                        onChange={onChangeHandler} /><br />

                    <label htmlFor="types">Type of Questions</label>
                    <input type="text" id="types" name="types" value={settingForm.types}
                        onChange={onChangeHandler} />

                    <button type="submit">Start Game</button>
                </form>
            </div>
        </>
    )
}

export default Startpage;
// export { formData};
