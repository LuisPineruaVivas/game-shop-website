import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { MyRoutes } from './router/routes';
import './App.css';
import React, {useState} from 'react';

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);
  return (
    <>
    <AppContext.Provider value={{library, setLibrary, bag, setBag}}>
      <MyRoutes/>
    </AppContext.Provider>
    </>
  )
}

export default App;
