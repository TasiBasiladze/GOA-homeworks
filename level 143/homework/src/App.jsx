import Child from "./components/Child.jsx";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "./components/FallbackUI.jsx";

const App = () => {
    return (
        <>  
          <ErrorBoundary FallbackComponent={(props) => <FallbackUI { ...props }/>}>
            <Child num={1} />
            <Child num={2} />
          </ErrorBoundary>
          <ErrorBoundary FallbackComponent={(props) => <FallbackUI { ...props }/>}>
            <Child num={3} />
          </ErrorBoundary>
          <Child num={4} />
        </>
    );
}

export default App;