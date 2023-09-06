// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from "@mui/material";
import Header from "./Header";
import Home from "./Routes/HomePage/Home";
import { About } from './Routes/AboutPage/About';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { UserPage } from './Routes/UserPage/UserPage';
import ContactsPage from './Routes/ContactPage/Contact';
import CoursePage from './Routes/CoursePage/CoursePage';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <div className="App"> 
    <Header />
      <Container>
      <ApolloProvider client={client}>
        <Routes>
        
      <Route path={'/'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/user'} element={<UserPage />} />
      <Route path={'/contacts'} element={<ContactsPage />} />
      <Route path={'/courses'} element={<CoursePage />} />
      
    </Routes>
    </ApolloProvider>
    </Container>
    </div>
    
  );
}

export default App;
