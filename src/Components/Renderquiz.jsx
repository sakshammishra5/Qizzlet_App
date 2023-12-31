import Parentbox from './Parentbox'
import './Renderquiz.css'


const result = [{ "category": "Geography", "type": "multiple", "difficulty": "easy", "question": "Which country does Austria not border?", "correct_answer": "France", "incorrect_answers": ["Slovenia", "Switzerland", "Slovakia"] }, { "category": "Entertainment: Film", "type": "multiple", "difficulty": "easy", "question": "The Queen song `A Kind Of Magic` is featured in which 1986 film?", "correct_answer": "Highlander", "incorrect_answers": ["Flash Gordon", "Labyrinth", "Howard the Duck"] }, { "category": "Entertainment: Television", "type": "multiple", "difficulty": "easy", "question": "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?", "correct_answer": "Eggo Waffles", "incorrect_answers": ["Toast", "Captain Crunch", "Bacon and Eggs"] }, { "category": "Celebrities", "type": "multiple", "difficulty": "easy", "question": "What does film maker Dan Bell typically focus his films on?", "correct_answer": "Abandoned Buildings and Dead Malls", "incorrect_answers": ["Historic Landmarks", "Action Films", "Documentaries "] }, { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": "What ingredients are required to make a cake in Minecraft?", "correct_answer": "Milk, Sugar, Egg, and Wheat", "incorrect_answers": ["Milk, Bread, Egg, and Wheat", "Milk, Sugar Cane, Egg, and Wheat", "Milk, Sugar, and Wheat"] }, { "category": "Science & Nature", "type": "multiple", "difficulty": "easy", "question": "Human cells typically have how many copies of each gene?", "correct_answer": "2", "incorrect_answers": ["1", "4", "3"] }, { "category": "Entertainment: Japanese Anime & Manga", "type": "multiple", "difficulty": "easy", "question": "In &quot;A Certain Scientific Railgun&quot;, how many &quot;sisters&quot; did Accelerator have to kill to achieve the rumored level 6?", "correct_answer": "20,000", "incorrect_answers": ["128", "10,000", "5,000"] }, { "category": "Geography", "type": "multiple", "difficulty": "easy", "question": "Harvard University is located in which city?", "correct_answer": "Cambridge", "incorrect_answers": ["Providence", "New York", "Washington D.C."] }, { "category": "History", "type": "multiple", "difficulty": "easy", "question": "On what street did the 1666 Great Fire of London start?", "correct_answer": "Pudding Lane", "incorrect_answers": ["Baker Street", "Houses of Parliament", "St Paul&#039;s Cathedral"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "In &quot;Homestuck&quot; the &quot;Kingdom of Darkness&quot; is also known as?", "correct_answer": "Derse", "incorrect_answers": ["Skaia", "Prospit", "The Medium"] }]

// const element=result.map((item,indx)=><Parentbox key={indx}/>)

const Renderquiz = () => {
    return (
        <>
            <div className="question_box">
                <Parentbox result={result}/>
            </div>
        </>
    )
}

export default Renderquiz