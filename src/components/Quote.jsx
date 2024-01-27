import axios from "axios";
import React, { useEffect, useState } from "react";
import QuoteCards from "./QuoteCards";

const Quote = () => {
  //stores quotes
  const [quoteData, setQouteData] = useState("");

  //stres boolean value for copy quotes
  const [copyQuote, setCopyQuote] = useState(false);

  //handles get api
  const getQuotes = async () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => setQouteData(res.data))
      .catch((err) => console.log(err));
  };

  //handles copy quotes
  const copyQuotes = () => {
    navigator.clipboard.writeText(quoteData.content + " - " + quoteData.author);
    setCopyQuote(true);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <QuoteCards
      quoteData={quoteData}
      getQuotes={getQuotes}
      copyQuote={copyQuote}
      copyQuotes={copyQuotes}
    />
  );
};

export default Quote;
