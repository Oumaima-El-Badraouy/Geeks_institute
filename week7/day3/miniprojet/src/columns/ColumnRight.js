import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary";

function ColumnRight() {
  const [crash, setCrash] = useState(false);

  return (
    <div>
      <p>This paragraph works fine.</p>
      <ErrorBoundary>
        <p>
          {crash
            ? { function: "I live to crash" } 
            : "Click the button to trigger a crash"}
        </p>
      </ErrorBoundary>

      <button onClick={() => setCrash(true)}>Replace string with object</button>
    </div>
  );
}

export default ColumnRight;
