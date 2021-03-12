import WordDefinition from './WordDefinition'

const About = ({Words, Definitions}) => {
    const objArray = Words.map((word, i)=>({word: word,
    definition: Definitions[i]}));
    // console.log(objArray);
    objArray.sort((a,b)=> (a.word > b.word) ? 1 : ((b.word > a.word) ? -1 : 0))
    // console.log(objArray);

    return (
        <div>
        <p>Okay, I admit it. Most of the Preset wordbank contains difficult words I've come across while reading, so you've been playing hangman on hardmode. Below are all of the words in the normal wordbank and their definitions. Happy learning!</p>
    {objArray.map((obj, i)=> < WordDefinition key={i}  word={obj.word} definition = {obj.definition} />)}
    <br/><br/>
    <p>This Project was created with React.js and utilizes the following libraries/helpers: React Router, PropTypes, Fetch, and Favicons.<br/> All images courtesy of Callie Yohn, who draws better than I ever will!</p>
        </div>
    )
}



export default About
