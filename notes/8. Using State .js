// Using state
// data that we want to change overtime or in reaction to user interaction

const Home = () => {
  // Here the rendered name "mario" does not change
  // name variable here is not reactive
  let name = "mario"
  const handleClick = e => (name = "luigi")

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

// using hook
// making the value reactive, when value changes page gets re-rendered

import { useState } from "react"

const Home = () => {
  // array destructuring for a value and a function to change its value
  const [name, setName] = useState("mario")
  const [age, setAge] = useState(17)

  const handleClick = e => {
    console.log("User just clicked the button!")
    setName("luigi")
    setAge(30)
  }

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      {name} is {age} old
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
