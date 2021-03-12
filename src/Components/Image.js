import PropTypes from 'prop-types'
import hangman0 from './../images/Hangman0.bmp'
import hangman1 from './../images/Hangman1.bmp'
import hangman2 from './../images/Hangman2.bmp'
import hangman3 from './../images/Hangman3.bmp'
import hangman4 from './../images/Hangman4.bmp'
import hangman5 from './../images/Hangman5.bmp'
import hangman6 from './../images/Hangman6.bmp'


const Image = ({wrongGuesses}) => {
    let logo;
 if(wrongGuesses === 0) logo = hangman0;
 else if(wrongGuesses === 1) logo = hangman1;
 else if(wrongGuesses === 2) logo = hangman2;
 else if(wrongGuesses === 3) logo = hangman3;
 else if(wrongGuesses === 4) logo = hangman4;
 else if(wrongGuesses === 5) logo = hangman5;
 else if(wrongGuesses === 6) logo = hangman6;
    return (
        <div style = {{marginTop: '1.5rem'}}>
            <img width='100%' alt='hangman being built' src= {logo}></img>
        </div>
    )
}

Image.propTypes = {
wrongGuesses: PropTypes.number
}
Image.defaultProps = {
    wrongGuesses: 0
}
export default Image
