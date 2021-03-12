import PropTypes from 'prop-types'
import {useState} from 'react'

const WordDefinition = ({word, definition}) => {
    const [toggle, setToggle] = useState(false)
    const showHide = (state)=>{
        setToggle(!state)
    }
    
    return (
        <>
            <button onClick = {()=>showHide(toggle)} className = 'btn def'>{word}</button>
            {toggle && <p  className = 'definition'> {definition}</p>}
        </>   
        
    )
}

WordDefinition.propTypes = {
word: PropTypes.string,
definition: PropTypes.string
}

export default WordDefinition
