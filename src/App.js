// import logo from './logo.svg';
// import './App.css';

import { Container } from "@mui/material";
import Header from "./Header";
import Home from "./Routes/HomePage/Home";

function App() {
  return (
    <div className="App"> 
    <Header />
      <Container>
      <Home />
    </Container>
    </div>
    
  );
}

export default App;
