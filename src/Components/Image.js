import PropTypes from 'prop-types'
import hangman0 from './../images/hangman0.bmp'
import hangman1 from './../images/hangman1.bmp'
import hangman2 from './../images/hangman2.bmp'
import hangman3 from './../images/hangman3.bmp'
import hangman4 from './../images/hangman4.bmp'
import hangman5 from './../images/hangman5.bmp'
import hangman6 from './../images/hangman6.bmp'


const Image = ({wrongGuesses}) => {
    let logo;
 if(wrongGuesses == 0) logo = hangman0;
 else if(wrongGuesses == 1) logo = hangman1;
 else if(wrongGuesses == 2) logo = hangman2;
 else if(wrongGuesses == 3) logo = hangman3;
 else if(wrongGuesses == 4) logo = hangman4;
 else if(wrongGuesses == 5) logo = hangman5;
 else if(wrongGuesses == 6) logo = hangman6;
    return (
        <div>
            <img width='100%' alt='hangman image' src= {logo}></img>
        </div>
    )
}

Image.propTypes = {

}
Image.defaultProps = {
    wrongGuesses: 0
}
export default Image
