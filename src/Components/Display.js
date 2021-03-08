import PropTypes from 'prop-types'

const Display = ({wins, losses,gameState, guessedLetters, wrongGuesses}) => {
    return (
        <div>
            {gameState ? 'game in progress' : 'game not in progress'}
           <p> {` Letters Guessed:${guessedLetters}`}<span style={{float:'right'}}>{`Wins: ${wins}`}</span></p>
           <p>{`Wrong Guesses remaining:  ${6 - wrongGuesses}`}<span style={{float:'right'}}>{`Losses: ${losses}`}</span></p>
           
           
        </div>
    )
}

Display.propTypes = {

}
Display.defaultProps = {
    wins : 0,
    losses: 0
}

export default Display
