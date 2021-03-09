import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
const Modal = ({message, display, closeModal}) => {
    if(!closeModal) closeModal = ()=>{return null}
    return (

        <div className = {`modal ${display ? 'show' : 'hide'} ${message.includes('correctly')? 'won' : 'lost'}`}>
            <p><FaTimes onClick = {closeModal} className = 'close-modal' style={{color:'red', cursor: 'pointer'}}/> {message} If you're interested in what a word means, you can find its definition on the about page, located at the bottom of the screen. </p>
        </div>
    )
}

Modal.propTypes = {

}
Modal.css ={
    display: 'none'
}

Modal.defaultProps = {
    message: 'Nothing to show here',
    closeModal : function(){return null}
}

export default Modal
