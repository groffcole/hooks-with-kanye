import React from "react";
import useKanyeQuotes from "./hooks/useKanyeQuotes";

const App = () => {
  const {quotes} = useKanyeQuotes();

  return (
    <div>
      <p>umm, hello</p>
      {quotes &&
        <div>
          <h1>{quotes.firstQuote}</h1>
          <h1>{quotes.secondQuote}</h1>
        </div>
      }
    </div>
  );
}

export default App;