import React from "react";
import SignDetail from "./components/SignDetail";
import { getParsedSignData } from "./services/SignService";

function App() {
  const signData = getParsedSignData();

  return (
    <div className="App">
      <h1>Feature 4 Demo</h1>
      {/* Passing parsed data down to the child via props */}
      <SignDetail letter={signData.letter} description={signData.description} />
    </div>
  );
}

export default App;