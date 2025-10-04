import Child from "./components/child";
import ErrorBoundary from "./ErrorBoundary";

function App() {

  return (
    <div>
      <ErrorBoundary>
        <Child />
        <Child />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
      <Child />
    </div>
  )
}

export default App
