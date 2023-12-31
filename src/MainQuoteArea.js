import React, { useState, useEffect } from "react";
import "./MainQuoteArea.css";

function MainQuoteArea() {
  const [mainQuoteText, setMainQuoteText] = useState("Loading, Please Wait...");
  const [mainQuoteAuthor, setMainQuoteAuthor] = useState("");

  function fetchRandomQuote() {
    fetch(`https://malkitbenning-quote-server.glitch.me/quotes/random/`)
      .then((res) => res.json())
      .then((data) => {
        setMainQuoteText(data.quote);
        setMainQuoteAuthor(data.author);
      });
  }

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="main-quote-area">
      <p className="quote-text">{mainQuoteText}</p>
      <p className="quote-author">{mainQuoteAuthor}</p>
      <button type="button" className="quote-btn" onClick={fetchRandomQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export default MainQuoteArea;
