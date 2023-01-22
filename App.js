import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [myinterest, setMyinterest] = useState("IT");


  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`please enter some data `);
  };
  const handleChange = (event) => {
    setMyinterest(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
      <br></br>
      <br></br>
      <label>
        Enter your age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <input type="submit" />
      <br></br>
      <br></br>
      
      <label>
        What's Your query ?<input type="textarea"></input>
      </label>
      <input type="submit" />
      <br></br>
      <br></br>
      <select value={myinterest} onChange={handleChange}>
        <option value="webdev">web dev</option>
        <option value="ceh">ceh</option>
        <option value="networking">networking</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={(e) => this.delete(e)} className="btn btn-sm btn-danger">Delete</button>
      
      
    </form>
  );
}

export default App;
