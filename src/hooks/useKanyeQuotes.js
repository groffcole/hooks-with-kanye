import React, { useState, useEffect } from "react";

export const useKanyeQuotes = () => {
  const [quotes, setQuotes] = useState();

  const getFirstQuote = async () => {
    const apiResponse = await fetch("https://api.kanye.rest/");
    const apiResponseJson = await apiResponse.json();
    return apiResponseJson.quote;
  };

  const getSecondQuote = async () => {
    const apiResponse = await fetch("https://api.kanye.rest/");
    const apiResponseJson = await apiResponse.json();
    return apiResponseJson.quote;
  };

  useEffect(() => {
    const getQuotes = async () => {
      const firstQuote = await getFirstQuote();
      const secondQuote = await getSecondQuote();
      setQuotes({firstQuote, secondQuote});
    };

    getQuotes();
  }, []);

  return quotes; 
}