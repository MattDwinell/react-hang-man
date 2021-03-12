const Letter = ({letter, display}) => {
    //console.log(display);
    //console.log(letter);
    //console.log(display.includes(letter));
    const color = display.includes(letter) ? 'blue' : 'steelblue';
    return (
        <span className = 'letter' style={{color:color}}>
            { color === 'blue' ?  letter : '_'}  
        </span>
    )
}

export default Letter
