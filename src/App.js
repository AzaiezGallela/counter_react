import './App.css';
import { useState } from'react';

function App() {

  let [counter, setCounter] = useState(0);

  function handleAddClick(){
    setCounter(++counter);
  }

  function handleRemoveClick(){
    if (counter > 0){
      setCounter(--counter);
    }
    else {
      alert("Cannot go down 0 :)");
    }
  }

  function handleResetClick(){
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>Counter Up and Down</h1>
      <div className='Counter'>{counter}</div>
      <button onClick={() => handleRemoveClick()}>-</button>
      <button onClick={() => handleAddClick()}>+</button>
      <br/>
      <button onClick={() => handleResetClick()}>Reset to 0</button> 
    </div>
  );
}

export default App;
