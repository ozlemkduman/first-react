export default function Card2FooterWithUseState({like,funcLike}){
    

    return(
        <>
        <div>
            Likes ({like})
        </div>
        <button style={{width:"100px",height:"30px", padding:"0px"}} onClick={funcLike}>Like It</button>
        </>
    )
}