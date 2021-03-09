import PropTypes from 'prop-types'
import {useState} from 'react'

const WordDefinition = ({word, definition, key}) => {
    const [toggle, setToggle] = useState(false)
    const showHide = (state)=>{
        setToggle(!state)
    }
    
    return (
        <>
            <button onClick = {()=>showHide(toggle)} className = 'btn def'>{word}</button>
            {toggle && <p id= {key} className = 'definition'> {definition}</p>}
        </>   
        
    )
}

WordDefinition.propTypes = {
word: PropTypes.string,
definition: PropTypes.string,
key: PropTypes.number
}

export default WordDefinition
