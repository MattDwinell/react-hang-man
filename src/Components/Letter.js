const Letter = ({letter, display}) => {
    //console.log(display);
    //console.log(letter);
    //console.log(display.includes(letter));
    const color = display.includes(letter) ? 'red' : 'blue';
    return (
        <span className = 'letter' style={{color:color}}>
            { color == 'red' ?  letter : '_'}  
        </span>
    )
}

export default Letter
