import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState('');

  console.log('rendering', value);

  return (
    <div className="App">
      <h1>Value is {value}</h1>
      <p>{message}</p>
  
      {[1, 2, 3, 4, 5].map(x => (
        <button 
          onClick={() => {
            setValue(x);
            setMessage(message + x);
          }}
        >
          {x}
        </button>
      ))}
      
    </div>
  );
}
