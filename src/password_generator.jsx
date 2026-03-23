import React, { useState,useEffect } from 'react';

function Password_Generator(){

    const [length, setLength] = useState(8);

    const uppercase_library = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase_library = "abcdefghijklmnopqrstuvwxyz";
    const special_library = "!@#$%^&*()_+";

    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [special, setSpecial] = useState(false);

    const [password, setPassword] = useState("");
    const [coppied, setCoppied] = useState({Text:"Copy",Status:false});
    const [error,setError] = useState("");

    const Generate_pass = (()=>{

        let library = "123456789";

        if(uppercase){
            library += uppercase_library;
        }

        if(lowercase){
            library += lowercase_library;
        }

        if(special){
            library += special_library;
        }

        let password = "";

        for(let i = 0; i < length; i++){
            password += library[Math.floor(Math.random() * library.length)];
        }

        setPassword(password);

    })

    useEffect(() => {

        Generate_pass();

    }, [length,uppercase,lowercase,special]);


    const copyPassword = () => {

        if(!coppied.Status){
        setCoppied({Status:true,Text:"Copied!"})
        navigator.clipboard.writeText(password);
        setTimeout(()=>{
            setCoppied({Status:false,Text:"Copy"})
            setError("");
        },5000)

        }else{
            setError("Text Is Already Copied!");
            console.log(error)
        }
        
    }

    return(
        <>

        <div className="main_cont w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("./bg.jpg")`}}>

            <div className="cont flex justify-center items-center h-screen">

                    <div className="form bg-transparent backdrop-blur-3xl p-10 rounded-lg">

                        <h1 className='text-white text-3xl mb-4 font-bold'>Password Generator</h1>
                        <hr className='border-gray-600 mb-4'></hr>
                        <p className='text-white mb-4'>Generate Password With Below Fields</p>

                        <div className="flex justify-between text-white">
                            <p>Length</p>
                            <p>{length}</p>
                        </div>

                        <input type='range' min={8} max={16} onChange={(e) => setLength(e.target.value)} value={length} className='w-full'></input>



                    <div className="flex flex-col gap-2 text-white p-3">

                        <div className="flex flex-row gap-2">
                            <input type='checkbox' name='uppercase' onChange={(e) => setUppercase(!uppercase)}></input>
                            <p>Include Uppercase</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <input type='checkbox' name='lowercase' onChange={(e) => setLowercase(!lowercase)}></input>
                            <p>Include Lowercase</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <input type='checkbox' name='special' onChange={(e) => setSpecial(!special)}></input>
                            <p>Include Special Characters</p>
                        </div>

                    </div>

                    {/* <p className='text-white mt-4 text-center'>Generated Password : {password}</p> */}

                    <div className="copy_pass flex">
                    <input type='text' readOnly value={password} className='w-full text-white border-1 px-3 py-1 rounded-bl-lg rounded-tl-lg'></input><button className='text-white cursor-pointer bg-blue-500 px-3 py-2 border-1 rounded-br-lg rounded-e-lg' onClick={copyPassword}>{coppied.Text}</button>
                    </div>

                    <p className='text-red-600 text-center py-3'>{error}</p>

                    <div className="flex justify-center p-2">
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer' onClick={Generate_pass}>Regerate Password</button>
                    </div>

                    </div>

            </div>

        </div>
            
        </>
    )
}

export default Password_Generator;