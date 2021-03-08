import PropTypes from 'prop-types'

const Input = ({makeGuess, enabled,reset, handleChange, totalGuesses}) => {
    return (
        <input type= {reset ? "reset" : "text"}  className = 'input' onKeyUp={makeGuess} placeholder = 'Enter letters here' disabled={!enabled}>
            
        </input>
    )
}

Input.propTypes = {

}

export default Input
