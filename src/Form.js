import React from "react";

const Form = ({ formHandleSubmit, amount, formOnChange }) => {
  return (
    <form onSubmit={formHandleSubmit}>
      <label htmlFor="amountOfLoremParagraphs">Paragraphs:</label>
      <input
        type="number"
        name="amountOfLoremParagraphs"
        id="amountOfLoremParagraphs"
        value={amount}
        onChange={formOnChange}
      />
      <button>GENERATE</button>
    </form>
  );
};

export default Form;
