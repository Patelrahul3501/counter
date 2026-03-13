


function Random_BG(){

    const colors = ["red","green","blue","yellow","pink","orange","purple","brown","gray","black","white"];

    function changeColor(){
     
        const randomcolor = colors[Math.floor(Math.random() * colors.length)];
        console.log(randomcolor)
        document.body.style.backgroundColor = randomcolor;
        
    }

    return(
        <>
            <div className="flex justify-center items-center h-screen">
            <button onClick={changeColor} className="bg-blue-500 text-white px-15 py-2 rounded cursor-pointer">Change Color</button>
            </div>
        </>
    )
    
}

export default Random_BG;