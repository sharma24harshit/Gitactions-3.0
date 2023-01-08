import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      
      <h1>Counter app : {count}</h1>
      <div>
        <button onClick={()=>setCount(count-1)} >Dec</button>
        <button onClick={()=>setCount(count+1)} >Inc</button>
      </div>
    </div>
  );
}

export default App;

