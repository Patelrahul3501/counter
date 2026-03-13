import {useState,useEffect} from "react"

function Random_BG(){

    const [color,setColor] = useState("");

    // const colors = ["red","Green","blue","yellow","pink","orange","purple","brown","gray","black","white"];

    const colors = {
            red: { name: "red", code: "oklch(63.7% 0.237 25)" },
            green: { name: "green", code: "oklch(63.7% 0.237 142)" },
            blue: { name: "blue", code: "oklch(63.7% 0.237 264)" },
            yellow: { name: "yellow", code: "oklch(90% 0.18 100)" },
            pink: { name: "pink", code: "oklch(70% 0.22 350)" },
            orange: { name: "orange", code: "oklch(75% 0.22 50)" },
            purple: { name: "purple", code: "oklch(65% 0.25 300)" },
            brown: { name: "brown", code: "oklch(45% 0.15 40)" },
            gray: { name: "gray", code: "oklch(60% 0.02 260)" },
            black: { name: "black", code: "oklch(0% 0 0)" },
            white: { name: "white", code: "oklch(100% 0 0)" }
};

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])

    return(
        <>
            <div className="fixed bottom-0 w-full">
            <div className="bg-white-300 flex justify-center p-4 m-3 rounded-2xl shadow-2xl">
                {
                    Object.keys(colors).map((color,index)=>{
                        // console.log(color)
                        // console.log(colors[color].code)
                        return(
                            <button key={index}
                            style={{backgroundColor : colors[color].code}}
                            className={`p-3 w-20 rounded-md cursor-pointer m-2 ${color === "white" ? "text-black border border-gray-400" : "text-white"} shadow-2xl`} onClick={()=>setColor(color)}>{color}</button>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
    
}

export default Random_BG;