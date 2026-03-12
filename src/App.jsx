import React,{useState} from 'react'

export default function App(){

  let [count, setCount] = useState(0)

  function increment(){
    setCount(count+=1);
  }

  function Decrement(){
    setCount(count-=1);
  }

  return(
    
    <>

        <h1>Count : {count}</h1><br></br>
        <button onClick={increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

    </>
    
  )
}