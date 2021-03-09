import React from 'react';
import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Components/Header'
import Word from './Components/Word'
import Display from './Components/Display'
import Input from './Components/Input'
import Modal from './Components/Modal'
import Image from './Components/Image'
import Footer from './Components/Footer'
import About from './Components/About'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); 
}*/
function App(){
  const [Words] = useState(['ANODYNE', 'MELANCHOLIA', 'APHASIA', 'BURBLING', 'ZAFTIG',"OSSIFIED","ETIOLATED","EXUDATIONS","SHAMBOLIC","PSORIATIC","SYNCRETIC","SYZYGY","INELUCTABLE","ERUCTATIONS","SCIOLIST","IMBROGLIO","AGGLUTINATION","BATHETIC","PUSILLANIMOUS","NACREOUS","MORBIFIC","TUMULI","SEPHARDIC","RECRUDESCENCE","AMANUENSIS","ONANISTIC","WEN","LETHEAN",])

  const [Definitions] = useState(['Inoffensive, normally deliberately so. Can also refer to a medicinal painkiller.','Deep sadness or gloom. Melancholy', 'Inability to understand speech or express it, caused by brain damage.','A continous murmruing noise, as of a river.', 'Pleasingly plump and round.','Turned into bone, having become rigid or fixed.','Feeble, pale, drawn out due to a lack of light.',"Fluids emitted by an organism through a pore or a wound.","Chaotic or disorganized.","Of psoriasis, characterized by itchiness and flaking skin.","A union of two different religions.","A pair of connected or corresponding things. Also, a connjuction or opposition, especially of the sun.","Inescapable, unable to be avoided.","Burps. That is all.","Someone who pretends to be knowledgeable or well-informed.","An extremely confused, complicated, or embrassing situation.","The clumping of particles.","Anticlimactic, Dissapointing.","Cowardly, showing a lack of courage.","Pearlescent, having a color similiar to that of a pearl","Disease causing.","ancient burial mounds or barrows. the singular form is tumulus.","Pertaining to a subset of Jews whose ancestors lived in Spain.","The recurrence of an undesirable condition.","A literary or artistic assitant, often one who copies manuscripts","Pertaining to masturbation. pointless, self-absorbed, self-congratulatory.","Nowadays known as a boil or swelling on the skin, it used to mean an extremely large or crowded city","Causing oblivion or forgetfulness of the past."])

  const[letters, setLetters] = useState(['merry'])
  const[gameInProgress, setGameInProgress] = useState(false);
  const [mounted, setMounted] = useState(false);
  const[guesses, setGuesses] = useState('');
  const[wrongGuesses, setWrongGuesses] = useState(0)
  const [value, setValue] = useState('')
  const[reset, setReset] = useState(false);
  const[message,setMessage] = useState('');
  const[wins, setWins] = useState(0);
  const[losses, setLosses] = useState(0);


  const chooseWord = ()=>{
    console.log(Words);
    let chosenWord = Words[Math.floor(Math.random() * Words.length)]
    setLetters(chosenWord);
    console.log(letters);
  }

  const toggleGame = ()=>{
    console.log('in toggle game function' + gameInProgress);
    if(gameInProgress){
      setGameInProgress(false);
      setGuesses('');
      setReset(true);
      setWrongGuesses(0);
    }else{
      setGuesses('');
      setWrongGuesses(0);
       setGameInProgress(true);
       chooseWord();
       setReset(false);
    }
    console.log(gameInProgress);
  }
  const updateValue = ()=>{
setValue(guesses);
  }
  const startNewGame = ()=>{
    console.log('hi');
    setMounted(false);
    toggleGame();
  }

const gameStatusCheck = (predGuess, predWrong) =>{
  console.log(letters);
  console.log(predGuess);
  console.log(predWrong);
  let tempCorrectLetters = letters.split('');
  let gameWin = true;
  tempCorrectLetters.forEach(letter => {
    if(! predGuess.includes(letter)) gameWin = false;
  });
  if(gameWin){
    console.log('game won!');
    setMessage(`You correctly guessed "${letters.toLowerCase()}"! Close this message to play again.`);
    setWins(wins + 1)
    setMounted(true);
    //setReset(true);
    //setGameInProgress(false);
    toggleGame();
  }else{
if(predWrong >= 6){
  console.log('game lost. womp womp womp');
  setLosses(losses + 1)
  setMessage(`Out of guesses! The word was ${letters.toLowerCase()}. Close this message to play again.`);
  setMounted(true);
  setGameInProgress(false);
  setReset(true);
  

}
  }
}

  const checkLetter = (e)=>{
    //  console.log('hi');
    // console.log(gameInProgress); 
     console.log(e.key)
    if(gameInProgress){
  // console.log('game in progress');
    // console.log(/[a-zA-Z]/g.test(e.key.toUpperCase()))
    if(! /[^a-zA-Z]/g.test(e.key.toUpperCase()) && e.key.length === 1 && !guesses.includes(e.key.toUpperCase())){
      let tempGuesses = guesses;
      console.log(tempGuesses)
      tempGuesses = tempGuesses + e.key.toUpperCase();
      console.log(tempGuesses);

      setGuesses( tempGuesses)
      console.log('acceptable keystroke');
      console.log(e.key);
      let tempWrong = wrongGuesses;
      if(! letters.includes(e.key.toUpperCase())){
        tempWrong++;
        setWrongGuesses(wrongGuesses + 1);
        console.log(wrongGuesses);
      }
      gameStatusCheck(tempGuesses, tempWrong);

    }else{
      console.log('unacceptable keystroke');
    }
    } else{
      console.log('thinks game is not in progress');
    } 
  }

  return(
    <Router>
    <div className = 'container' >
    <Header toggleGame = {toggleGame} gameInProgress = {gameInProgress}/>

     
    
    <Route path='/' exact render={(props)=>(
      <>
     
      <Word guesses = {guesses} letters= { gameInProgress ? letters : null}/>
      <Input wrongGuesses = {wrongGuesses} reset = {reset} value= {value} handleChange = {updateValue} enabled={gameInProgress} makeGuess={(e)=>{checkLetter(e)}}/>
      <Display wins = {wins} losses = {losses} gameState = {gameInProgress} guessedLetters = {guesses} wrongGuesses = {wrongGuesses}/>
      <Image wrongGuesses={wrongGuesses}/>
      <Modal closeModal = {startNewGame} message={message} display={mounted}/>
      </>
    )}/>
    <Route path = '/about' render={(props)=>(
      <About Words = {Words} Definitions = {Definitions}/>

    )}/>
    </div> 
    <Footer/>
    </Router>
  )  


}


export default App;
