import ImgGoster from "./imgGoster";


function Card2({imgCard2,altCard2,...rest}){
    const styleCard2={
        width:"300px",
        border:"1px solid red",
        margin:"10px",
        padding:"15px"
    }

    return(
        <>
        <div style={styleCard2}>
        <ImgGoster imgSrc={imgCard2} imgAlt=""  />
        {rest.children}
        </div>
        </>
    )
}

export default Card2;