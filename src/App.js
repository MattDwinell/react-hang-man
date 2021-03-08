import React from 'react';
import Header from './Components/Header'
import Word from './Components/Word'
import {useState} from 'react'
import Display from './Components/Display'
import Input from './Components/Input'
import Modal from './Components/Modal'
import Image from './Components/Image'

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
  const [Words] = useState(['ANODYNE', 'MELANCHOLIA', 'APHASIA', 'BURBLING', 'ZAFTIG'])
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
    setMessage(`You correctly guessed ${letters.toLowerCase()}! Close this message to play again.`);
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
    <div className = 'container' >

      <Header toggleGame = {toggleGame} gameInProgress = {gameInProgress}/>
      <Word guesses = {guesses} letters= { gameInProgress ? letters : null}/>
      <Input wrongGuesses = {wrongGuesses} reset = {reset} value= {value} handleChange = {updateValue} enabled={gameInProgress} makeGuess={(e)=>{checkLetter(e)}}/>
      <Display wins = {wins} losses = {losses} gameState = {gameInProgress} guessedLetters = {guesses} wrongGuesses = {wrongGuesses}/>
      <Image wrongGuesses={wrongGuesses}/>
      <Modal closeModal = {startNewGame} message={message} display={mounted}/>
    </div>
  )  


}


export default App;
