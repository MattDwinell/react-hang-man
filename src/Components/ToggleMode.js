import PropTypes from 'prop-types'

const ToggleMode = ({changeDifficulty, gameInProgress})=> {
    if(!gameInProgress){
    return (
        <div className='radio-control'>
            <div>
                <input onChange = {()=>changeDifficulty(document.querySelector('input[name="difficulty"]:checked').value)} type='radio' value ='hard' name='difficulty' />
                <label htmlFor='hard'> Normal</label>
            </div>
            <div>
                <input onChange = {()=>changeDifficulty(document.querySelector('input[name="difficulty"]:checked').value)} name='difficulty' value='harder' type='radio' id='harder' />
                <label htmlFor='harder'>Hard</label>
            </div>
        </div>
    )
    }else{
        return(<> </>)
    }
}

ToggleMode.propTypes = {
changeDifficulty: PropTypes.func,
gameInProgress: PropTypes.bool
}

export default ToggleMode

