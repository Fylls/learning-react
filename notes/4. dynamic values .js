// using dynamic variables & expressions

import "./App.css"

function App() {
  const title = "hey this is my blog"
  const likes = 50
  const link = "www.google.com"

  // react converts everything passed as a string (even arrays)
  // we cannot convert booleans or objects
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{10}</p>
        <p>{Math.random() * 10}</p>
        <p>{"hello"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>

        <a href={link}> Google site </a>
      </div>
    </div>
  )
}

export default App
