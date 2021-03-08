import "./App.css"

// anything inside, will be applied to every component of the browser,
// css file is not scoped to module

// CSS Modules or Styles component

// for small project all in index.css

// In-Line styling

// first {} for dynamic value,
// second {} javascript object key value pairs
const Example = () => {
  return (
    <div
      className="lol"
      style={{
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: "10px",
      }}
    >
      In-Line styling
    </div>
  )
}

export default Example
