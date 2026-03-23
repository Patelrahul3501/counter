import React,{useEffect, useState,Suspense} from 'react';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


const Currency_Convert = () => {

    const [loading, setLoading] = useState(true);

    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [password,setPassword] = useState("");
    const [coppied,setCoppied] = useState({Text:"Copy",Status:false});
    const [error,setError] = useState("");
    const [result,setResult] = useState("");
    const [api_data,setApi_data] = useState([]);

    useEffect(() => {

    const api_data_fun = async () => {
        setError("");
        try {
            const api_data_fetch = await fetch(
                "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
            );
            const data = await api_data_fetch.json();
            setApi_data(data);
        } catch (err) {
            setError("Failed to load currencies");
        } finally {
            setLoading(false); // important
        }
    };

    api_data_fun();
    convert();
        
    },[])

    const swap = () =>{
        setFrom(to);
        setTo(from);
    }

    const convert = async() =>{

        setError("");

        if(amount === "" || amount === null || amount === undefined || amount <=0){
            setError("Please enter a valid amount");
            return;
        }

        const api_perticular_data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
        const data = await api_perticular_data.json();

        const result_value = (amount * data[from][to]).toFixed(2);
        setResult(result_value);
    }


    return(
        <>
            <div className="container w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center text-white" style={{backgroundImage: `url("./currency _bg.jpg")`}}>

                <div className="glass_cont p-10 rounded-lg bg-transparent flex flex-col justify-center items-center backdrop-blur-sm shadow-lg">

    {loading ? (
        <div className="w-80">
            <Skeleton height={35} className="mb-4" />
            <Skeleton height={20} className="mb-4" />
            <Skeleton height={40} className="mb-4" />
            <Skeleton height={40} className="mb-4" />
            <Skeleton height={40} />
        </div>
    ) :  (
        <>
            <h1 className='text-3xl font-bold mb-4'>Currency Converter</h1>
            <hr className='border-white mb-4 w-full'></hr>
            <p className='text-white mb-4'>Convert Currency From One To Another</p>

            <div className="flex flex-row items-center justify-center w-full">
                <input
                    className='px-2 py-1 mx-2 rounded-lg bg-white text-black'
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <select
                    className='px-2 py-1 rounded-lg bg-white text-black my-3'
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                >
                    {Object.keys(api_data).map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-row items-center justify-center bg-white text-black px-8 py-1 rounded-lg ">
                <button className='cursor-pointer' onClick={swap}>Swap</button>
            </div>

            <div className="flex flex-row items-center justify-center w-full my-3">
                <input
                    className='px-2 py-1 mx-2 rounded-lg bg-white text-black'
                    type='number'
                    value={result}
                    readOnly
                />

                <select
                    className='px-2 py-1 rounded-lg bg-white text-black'
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                >
                    {Object.keys(api_data).map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div className="text-red-500">{error}</div>

            <div className="flex flex-row gap-2 p-3 w-full justify-center">
                <button
                    className='rounded-lg px-8 py-2 bg-white text-black cursor-pointer shadow-lg'
                    onClick={convert}
                >
                    Convert
                </button>
            </div>
        </>
    )}

</div>

            </div>
            
        </>
    )
}

export default Currency_Convert;