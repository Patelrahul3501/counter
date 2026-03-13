import React,{useState} from 'react'

export default function App(){

  let [count, setCount] = useState(0);

  const [error,setError] = useState({error:""});

  function increment(){
    // setCount(count+=1);
    setCount(count+1)
    setError({error:""})
  }

  function Decrement(){
    if(count<=0){
      setError({error:"Count Can't Be less than 0"})
      setCount(0);
    }else{
      setCount(count-1)
    }
  }

  return(
    
    <>

        <h1>Count : {count}</h1><br></br>
        <button onClick={increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button><br></br>
        <p>{error.error}</p>

    </>
    
  )
}