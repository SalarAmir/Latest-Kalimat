import './App.css';
import Navbar from './components/navbar'
import Home from './components/Home';

import { UserProvider } from './components/contexts/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Navbar></Navbar>
      <Home></Home>
    </UserProvider> 

    </>
  );
}

export default App;
