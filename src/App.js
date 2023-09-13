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
import SignUp from './Routes/UserPage/SignUp';
import SignIn from './Routes/UserPage/SignIn';
import { getToken } from './helpers';
import { Navigate } from 'react-router-dom';

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
        <Route path={'/user'} element={getToken() ? <UserPage /> : <Navigate to="/signin"/>} />
      <Route path={'/contacts'} element={<ContactsPage />} />
      <Route path={'/courses'} element={<CoursePage />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path={'/signin'} element={<SignIn />} />
      
    </Routes>
    </ApolloProvider>
    </Container>
    </div>
    
  );
}

export default App;
