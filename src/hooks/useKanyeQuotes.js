import React, { useState, useEffect } from "react";

export const useKanyeQuotes = () => {
  const [firstQuote, setFirstQuote] = useState();
  const [secondQuote, setSecondQuote] = useState();

  useEffect(() => {
    const getFirstQuote = async () => {
      const apiResponse = await fetch("https://api.kanye.rest/");
      const apiResponseJson = await apiResponse.json();
      setFirstQuote(apiResponseJson);
    };

    const getSecondQuote = async () => {
      const apiResponse = await fetch("https://api.kanye.rest/");
      const apiResponseJson = await apiResponse.json();
      setSecondQuote(apiResponseJson);
    };

    const getQuotes = async () => {
      await getFirstQuote();
      await getSecondQuote();
    };

    getQuotes();
  });

  return [firstQuote, secondQuote]; // return as array or as object {}?
}