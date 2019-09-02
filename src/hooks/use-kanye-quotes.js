import { useState, useEffect } from "react";
import axios from "axios";

export const useKanyeQuotes = () => {
  const [quotes, setQuotes] = useState();

  const getQuote = async () => {
    const apiResponse = await axios.get("https://api.kanye.rest/");
    return apiResponse.data.quote;
  };

  useEffect(() => {
    const getQuotes = async () => {
      setQuotes({
        firstQuote: await getQuote(),
        secondQuote: await getQuote()
      });
    };

    getQuotes();
  }, []);

  return { quotes };
}