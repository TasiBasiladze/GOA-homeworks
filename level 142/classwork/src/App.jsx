import Child from "./components/child"
import ErrorBoundary from "./errorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Child/>
        <Child/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Child/>
      </ErrorBoundary>
      <Child/>
    </div>
  );
}

export default App
