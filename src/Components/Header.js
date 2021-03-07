import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, gameInProgress, toggleGame}) => {



    return (
        <header className = 'header'>
            <h1> {title}</h1>
            <Button onClick = {toggleGame} gameInProgress = {gameInProgress}/>
            
        </header>
    )
}

Header.propTypes = {
title: PropTypes.string,
gameInProgress: PropTypes.bool
}
Header.defaultProps = {title: 'hangman', gameInProgress: false}

export default Header
