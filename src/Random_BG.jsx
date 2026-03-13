
function Random_BG(){

    const colors = ["red","green","blue","yellow","pink","orange","purple","brown","gray","black","white"];

    function changeColor(){
     
        const randomcolor = colors[Math.floor(Math.random() * colors.length)];
        console.log(randomcolor)
        document.body.style.backgroundColor = randomcolor;
        
    }

    return(
        <>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
    
}

export default Random_BG;