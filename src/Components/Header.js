import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({title, gameInProgress, toggleGame}) => {
    const location = useLocation()


    return (
        <header className = 'header'>
            <h1> {title}</h1>
           { location.pathname === '/' &&(<Button onClick = {toggleGame} gameInProgress = {gameInProgress}/>)}
            
        </header>
    )
}

Header.propTypes = {
title: PropTypes.string,
gameInProgress: PropTypes.bool
}
Header.defaultProps = {title: 'Hangman',
                    gameInProgress: false
}

export default Header
