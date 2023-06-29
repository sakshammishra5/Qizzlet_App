import './styles/Particularans.css'

const Answer = (props) => {
    const{ans}=props

    function handleAnsOnClick(){
        
    }

  return (
    <div className="ans" onClick={handleAnsOnClick}>
        {ans}
    </div>
  )
}

export default Answer