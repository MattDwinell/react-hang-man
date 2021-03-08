import Letter from './Letter'
const Word =({letters, guesses})=> {
    // console.log(guesses);
    if(letters == null){
        letters = 'PRESS START!';
        guesses = 'PRESS START!';
    }

    return (
        <div className = 'letterWrapper'>
            {letters.split('').map((l, i)=>(<Letter letter={l.toUpperCase()} key={i} display={guesses}/>))}
        </div>
    )

}

Letter.propTypes = {

}
Word.defaultProps = {
    letters : ['Press Start!'],
    guesses : ''
}

export default Word

