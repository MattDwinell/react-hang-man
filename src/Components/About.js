import {Link} from 'react-router-dom'
import WordDefinition from './WordDefinition'

const About = ({Words, Definitions}) => {
    console.log(Words.length);
    console.log(Definitions.length);
    return (
        <div>
        <p>Okay, I admit it. These are some of the most esoteric words I've come across while reading, so you've been playing hangman on hardmode. Below are all of the words in the wordbank and their definitions. Happy learning!</p>
    {Words.map((word, i)=> < WordDefinition key={i} word={word} definition = {Definitions[i]} />)}
        </div>
    )
}



export default About
