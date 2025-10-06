import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import FavoriteColor from "./FavoriteColor";
import LifecycleUnmount from "./LifecycleUnmount";
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simulation 1: Both counters in one ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <h2>Simulation 2: Each counter has its own ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 3: Without ErrorBoundary (will crash the app)</h2>
      <BuggyCounter />
       <div>
      <FavoriteColor />
    </div>
     <div>
      <LifecycleUnmount />
    </div>
    </div>
  );
}
