import { useState } from "react";

export default function(){

    const [counter,setCounter]=useState(0);

    function clickButton(){
        setCounter(counter + 1);
        console.log("butona tıklandı",cou)
    }

    return(
        <>
        <div>counter: {counter}</div>
        <button onClick={clickButton}> Arttırmak İçin Tıkla</button>
        </>
    )
}