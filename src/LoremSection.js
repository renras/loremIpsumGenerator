import React from "react";

const LoremSection = ({ text }) => {
  return (
    <section>
      {text.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </section>
  );
};

export default LoremSection;
