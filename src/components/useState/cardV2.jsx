import Card2HeaderWithUseState from "./cardHeader";
import Card2FooterWithUseState from "./cardFooter";
import { useState } from "react";

export default function CardV2() {
  const cardStyling = {
    listStyle: "none",
    boxSizing: "border-box",
    textAlign: "center",
    border: "2px solid red",
    color: "black",
    backgroundColor: "whiteSmoke",
    width: "250px",
    padding: "15px",
    textAlign: "center",
    margin:"15px",
  };

  const [like, setLike] = useState(0);

  function changeLike() {
    setLike((prev) => prev + 1);
  }

  return (
    <>
      <div style={cardStyling}>
        <Card2HeaderWithUseState  />
        <ul style={{ listStyle: "none", padding: "0px" }}>
          <li>Lorem, ipsum.</li>
          <li>Laudantium, impedit?</li>
          <li>Reiciendis, corrupti?</li>
        </ul>

        <Card2FooterWithUseState like={like} funcLike={changeLike} />
        
      </div>
    </>
  );
}
