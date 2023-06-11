import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VeriablesTest from "./components/ver";
import { KullaniciAdi } from "./components/kullanici";
import DiziOlustur from "./components/diziOlustur";
import Images from "./data/images";
import ImgGoster from "./components/imgGoster";
import { Card } from "./components/card";
import Card2 from "./components/card2";

function App() {
  const sirket = "Ave Tasarım";
  const calisan = ["müdür", "işçi", "stajyer"];
  const calisanAdi = [
    "Hakan Karaduman",
    "Gülcan Eroğlu",
    "Efe Polat",
    "Emre Karaduman",
  ];

  const product = [
    { id: 1, name: "macbook Pro 14", isStock: true },
    { id: 2, name: "hp Desire ", isStock: false },
    { id: 3, name: "Acer Game", isStock: true },
    { id: 4, name: "Ipad Mini", isStock: true },
    { id: 5, name: "Lenovo Plus 5", isStock: false },
    { id: 6, name: "Dell Turbo", isStock: true },
  ];

  return (
    <>
      <VeriablesTest />
      <h3>{sirket}a hoşgeldiniz. Kadromuz Aşağıdadır. </h3>
      <ul>
        {calisan.map((item, index) => (
          <li style={{ listStyle: "none", textAlign: "center" }} key={index}>
            {item}
          </li>
        ))}
      </ul>

      <ul style={{ backgroundColor: "grey" }}>
        {calisanAdi.map((item, index) => (
          <li style={{ listStyle: "none", textAlign: "center" }} key={index}>
            {item}
          </li>
        ))}
      </ul>
      {/* ul içerisinde product elemanlarından stok bilgisi true olanları liste olarak göster */}
      {[...Array(3)].map((item, index) => (
        <DiziOlustur key={index} />
      ))}
      <h2>ÜRÜNLER</h2>
      <ul>
        {product
          .filter((item) => item.isStock)
          .map((item) => (
            <li key={item.id}>{item.name.toUpperCase()}</li>
          ))}
      </ul>

      <h2>Stokta Olmayan Ürünler</h2>
      {/*ul içerisinde product elemanlarından stok bilgisi false olanları liste olarak göster */}
      {[...Array(1)].map((item, index) => (
        <VeriablesTest key={index} />
      ))}
      <ul style={{ backgroundColor: "yellow" }}>
        {product
          .filter((item) => item.isStock === false)
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>

      <KullaniciAdi />

      {[...Array(5)].map((item, index) => (
        <DiziOlustur key={index} />
      ))}

      {Images.map((item, index) => (
        <ImgGoster key={index} imgSrc={item} imgAlt="" />
      ))}
      <hr />
      <hr />
      {
        <Card
          cardTitle={"Sevgilerle"}
          cardSrc={Images.map((item, index) => item)}
          cardAlt=""
        />
      }
      <hr />

      <Card2 imgCard2={"https://picsum.photos/200/300"} altCard2="">
        <p>Lorem ipsum dolor sit.</p>
        <p>At voluptatem iusto tempora.</p>
        <p>Ullam, voluptatibus obcaecati? Dolorem.</p>
      </Card2>
    </>
  );
}

export default App;
