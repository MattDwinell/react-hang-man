import PropTypes from 'prop-types'
import Button from './Button'
import Toggle from './ToggleMode'
import {useLocation} from 'react-router-dom'
const Header = ({title, gameInProgress, toggleGame, changeDifficulty}) => {
    const location = useLocation()


    return (
        <header className = 'header'>
            <h1> {title}</h1>

           { location.pathname === '/' &&(<Button onClick = {toggleGame} gameInProgress = {gameInProgress}/>)}
             {location.pathname === '/' && (<Toggle changeDifficulty = {changeDifficulty} gameInProgress = {gameInProgress} />)}
        </header>
    )
}

Header.propTypes = {
title: PropTypes.string,
gameInProgress: PropTypes.bool,
changeDifficulty:PropTypes.func
}
Header.defaultProps = {title: 'Hangman',
                    gameInProgress: false
}

export default Header
