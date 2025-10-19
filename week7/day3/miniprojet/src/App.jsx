import ColumnRight from "./columns/ColumnRight";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ColumnRight />
      </ErrorBoundary>
    </div>
  );
}

export default App;
