import PropTypes from 'prop-types'

const Display = ({gameState, guessedLetters, wrongGuesses}) => {
    return (
        <div>
            {gameState ? 'game in progress' : 'game not in progress'}
           <p> {guessedLetters}</p>
           <p>{wrongGuesses}</p>
        </div>
    )
}

Display.propTypes = {

}

export default Display
