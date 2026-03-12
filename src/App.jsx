import React,{useState} from 'react'

export default function App(){

  let [count, setCount] = useState(0)

  function increment(){
    setCount(count+=1);
  }

  function Decrement(){
    count>0 ? setCount(count-=1) : setCount(0);
  }

  return(
    
    <>

        <h1>Count : {count}</h1><br></br>
        <button onClick={increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

    </>
    
  )
}