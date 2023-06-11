 function ImgGoster({imgSrc,imgAlt}){
    const imgStyle={
        backgroundColor:"black",
        width:"250px",
        height:"250px",
        margin:"10px"
    }


    return(
        <>
        <img src={imgSrc} alt={imgAlt} style={imgStyle} />
        </>
    )
}

export default ImgGoster;