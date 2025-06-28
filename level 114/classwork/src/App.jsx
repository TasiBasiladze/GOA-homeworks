import { useState } from "react";

function App() {
  // Creating state variable "userInfo" using the useState hook, initialized with an empty object
  const [userInfo, setUserInfo] = useState({});

  function handleChange({ target }) {
    // Destructuring "target" to get name and value of the input
    const { name, value } = target;

    // Updating the userInfo object, keeping existing values and updating only the changed field
    setUserInfo({ ...userInfo, [name]: value });
  }

  return (
    <div>
      <input
        type="text"
        name="firstname"
        placeholder="Enter firstname"
        onChange={handleChange} // When the user types in the input, this function runs and updates the state
      />
      <br />
      <input
        type="text"
        name="lastname"
        placeholder="Enter lastname"
        onChange={handleChange} // When the user types in the input, this function runs and updates the state
      />

      <div>
        <p>Firstname: {userInfo.firstname /*Showing the current value of firstname from the state object*/}</p>  
        <p>Lastname: {userInfo.lastname /*Showing the current value of lastname from the state object*/}</p> 
      </div>
    </div>
  );
}

export default App;
