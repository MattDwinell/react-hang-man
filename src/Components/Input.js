import PropTypes from 'prop-types'

const Input = ({makeGuess, enabled,reset, handleChange, totalGuesses}) => {
    //  console.log(document.getElementsByClassName('input')[0])
    //  console.log(reset);
    return (
        <input  type= {reset ? "reset" : "text"}  className = 'input' onKeyUp={makeGuess} placeholder = 'Enter letters here' disabled={!enabled}>
            
        </input>
    )
}

Input.propTypes = {
enabled: PropTypes.bool,
reset: PropTypes.bool,
totalGuesses: PropTypes.number,
handleChange: PropTypes.func
}


export default Input
