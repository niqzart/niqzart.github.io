import React from "react"
import ReactDOM from "react-dom/client"

function App() {
  return <h1>Hi! This is a test site, it'll improve soon!</h1>
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
