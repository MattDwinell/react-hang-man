import Letter from './Letter'
const Word =({letters})=> {
    if(letters == null){
        letters = 'Press Start!';
    }
    return (
        <div className = 'letterWrapper'>
            {letters.split('').map((l, i)=>(<Letter letter={l.toUpperCase()} key={i}/>))}
        </div>
    )

}

Letter.propTypes = {

}
Word.defaultProps = {
    letters : ['P','R','E','S','S',' ', 'S','t','a','r','t','!',]
}

export default Word

