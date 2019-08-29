import React from "react";
import { useKanyeQuotes } from "./hooks/useKanyeQuotes";

const App = () => {
  const [firstQuote, secondQuote] = useKanyeQuotes();

  return (
    <div>
      {firstQuote &&
        <h1>{firstQuote}</h1>
      }
      {secondQuote &&
        <h1>{secondQuote}</h1>
      }
    </div>
  );
}

export default App;