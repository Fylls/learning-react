// Reacting to click events

const Home = () => {
  const handleClick = e => {
    console.log("example")
    console.log(e) // event object
  }

  const handleClickAgain = (name, e) => {
    console.log("hi, ", name, e.target)
  }

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={e => handleClickAgain("mario", e)}>
        Click Me Again
      </button>
    </div>
  )
}

export default Home

// handleClick() NO with parenthesis it will execute even before touching the button
// we just want to pass a reference

// Implicit arrow function
// () => {functionToExecute( parameters )}

// EVENT OBJECT
