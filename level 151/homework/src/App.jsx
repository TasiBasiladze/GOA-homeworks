import React, { Suspense } from "react"

const Hello = React.lazy(() => {
  return import("./components/Hello")
})

function App() {
  

  return (
    <div>
      <p>my name is Taso</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Hello />
      </Suspense>
    </div>
  )
}

export default App
