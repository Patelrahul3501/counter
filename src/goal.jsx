import { useEffect, useState } from "react"

function Goal(){

    const [name,setName] = useState("");

    useEffect(() => {console.log("name Changed",Math.random())},[name])

    return(
        <>
            <input type="text" onChange={(e) => setName(e.target.value)}/><br></br>
            <button onClick={(()=>{console.log(name)})}>Submit</button>
        </>
    )
}

export default Goal