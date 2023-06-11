import { useState } from "react";
import ImgGoster from "./imgGoster";


function AddAndDeleteImages(){

    const [imageCounter,setImageCounter]=useState(1);

    function showImage(e){
        e.target.id==="add" ? 
        setImageCounter(prev => prev + 1) :
        setImageCounter(prev => prev > 0 ? prev - 1 : prev)
        
    }

    return(
        <>
        <button id="add" onClick={showImage}>Ekle</button>
        <button id="delete" onClick={showImage}>Sil</button>
        <hr />
        {[...Array(imageCounter)].map((item,index)=><ImgGoster key={index} imgSrc={`https://picsum.photos/id/${200+index}/200/300`}/>)}
        <hr />
        
        </>
    )
}

export default AddAndDeleteImages;