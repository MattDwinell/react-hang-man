import propTypes from 'prop-types'

const Button =({gameInProgress, onClick}) => {

    return (
             <button onClick = {onClick} className = 'btn'>{gameInProgress ? 'Reset Game' : 'Start Game'}</button>
    )
}
// Button.defaultProps = {
//     gameInProgress: false
// }

Button.propTypes = {
gameInProgress : propTypes.bool
}

export default Button
