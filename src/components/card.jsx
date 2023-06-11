import ImgGoster from "./imgGoster"
export function Card({cardSrc, cardAlt, cardTitle}){

    const cardStyle={
        backgroundColor:"black",
        margin:"10px", 
        borderRadius:"15px", 
        padding:"10px",
        width:"300px",
        height:"auto",
        color:"white"
    }
    return(
        <>
        <div style={cardStyle}>
            <h2>Kart Postası</h2>
            <h3>{cardTitle}</h3>
            <ImgGoster imgSrc={cardSrc} imgAlt={cardAlt} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis dignissimos maxime modi voluptate molestias.</p>
        </div>
        </>
    )


}