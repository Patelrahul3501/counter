
// function Props(props) {
//     return (
//         <div>
//             <p>Props : {props.name}</p>
//         </div>
//     );
// }   

// export default Props


function Props({children}) {
    return (<div className="Props">{children}</div>);
}

export default Props