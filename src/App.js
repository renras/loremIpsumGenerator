import React, { useState } from "react";
import loremParagraphs from "./loremParagraphs";
import LoremSection from "./LoremSection";
import Form from "./Form";

function App() {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState([]);

  const formOnChange = (e) => {
    setAmount(e.target.value);
  };

  const formHandleSubmit = (e) => {
    e.preventDefault();
    let count = Number(amount);
    if (amount > loremParagraphs.length) {
      count = loremParagraphs.length;
    }
    if (amount < 0) {
      count = 0;
    }
    setText(loremParagraphs.slice(0, count));
  };

  return (
    <main>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <Form
        formHandleSubmit={formHandleSubmit}
        amount={amount}
        formOnChange={formOnChange}
      />
      <LoremSection text={text} />
    </main>
  );
}

export default App;
