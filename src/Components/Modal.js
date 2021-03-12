import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
const Modal = ({message, display, closeModal}) => {
    if(!closeModal) closeModal = ()=>{return null}
    return (

        <div className = {`modal ${display ? 'show' : 'hide'} ${message.includes('correctly')? 'won' : 'lost'}`}>
            <p><FaTimes onClick = {closeModal} className = 'close-modal' style={{color:'red', cursor: 'pointer'}}/> {message} You can find definitions for all of the normal difficulty words by clicking on the about page below. </p>
        </div>
    )
}

Modal.propTypes = {
    message: PropTypes.string,
    display: PropTypes.bool,
    closeModal: PropTypes.func
}
Modal.css ={
    display: 'none'
}

Modal.defaultProps = {
    message: 'Nothing to show here',
    closeModal : function(){return null}
}

export default Modal
