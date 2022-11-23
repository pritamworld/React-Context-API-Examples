import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';
import Home from './Home';

let user = {
  first_name: "Pritesh",
  last_name: "Patel",
  isLoggedIn: false,

  display: () => {
      console.log("Hello from Context User Object")
  }
}
//<UserContext.Provider value={{u1: user, u2: user}}>
function App() {
  return (
    <>
      <h1>Week12 - Context API</h1>
      <UserContext.Provider value={user}>
        <Home/>
      </UserContext.Provider>
    </>
  );
}

export default App;
