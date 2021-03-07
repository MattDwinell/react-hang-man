import React from 'react';
import Header from './Components/Header'
import Word from './Components/Word'
import {useState} from 'react'

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
  const [Words] = useState(['Anodyne', 'Melancholia', 'Aphasia', 'burbling', 'zaftig'])
  const[letters, setLetters] = useState(['merry'])
  const[gameInProgress, setGameInProgress] = useState(false);

  const chooseWord = ()=>{
    console.log(Words);
    let chosenWord = Words[Math.floor(Math.random() * Words.length)]
    setLetters(chosenWord);
    console.log(letters);
  }

  const toggleGame = ()=>{
    console.log('in toggle game function' + gameInProgress);
    if(gameInProgress){setGameInProgress(false);
    }else{
       setGameInProgress(true);
       chooseWord();
    }
    console.log(gameInProgress);
  }
React.useEffect(()=>{
  if (document.getElementById('root').getAttribute('listener') !== 'true') {
      window.addEventListener('keyup', (event)=>{
              checkLetter(event);
  })
        document.getElementById('root').setAttribute('listener', 'true');
        console.log('event has been attached');
   }


})
  const checkLetter = (e)=>{
  if(gameInProgress)  console.log(e.key);
  };

  return(
    <div className = 'container' onKeyUp = {checkLetter}>
      <Header toggleGame = {toggleGame} gameInProgress = {gameInProgress}/>
      <Word letters= { gameInProgress ? letters : null}/>
    </div>
  )  


}


export default App;
