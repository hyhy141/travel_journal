import React from "react";
import Card from "./Card";
import data from "../data";
import { useState } from "react";

const Cards = () => {
  const [text, setText] = useState("");

  return (
    <section className="cards_container">
      <h1 style={{ fontSize: "40px" }}>Enjoy your holiday with us</h1>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => setText(e.target.value)}
        className="search_input"
        value={text}
      />

      {data
        .filter((item) => {
          if (item.location.toLowerCase().includes(text.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return <Card key={item.id} {...item} />;
        })}
    </section>
  );
};

export default Cards;
