import Counter from "./components/counter";
import AddAndDeleteImages from "./components/imagesShow.jsx";
import CardV2 from "./components/useState";

export default function NewApp() {
  return (
    <>
      <Counter />

      <hr />
      <AddAndDeleteImages />

      <hr />

      <CardV2/>
      <CardV2/>
      <CardV2/>
      <CardV2/>
      
    </>
  );
}
