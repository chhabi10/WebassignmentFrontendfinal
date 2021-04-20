import logo from './logo.svg';
import './App.css';
import  'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import Footer from'./Footer/Footer'
import Container from './Container/Container'
import  {BrowserRouter, Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
  
      <Header></Header>
      <Container></Container>
      
      <Footer></Footer>
    
        </BrowserRouter>
  );
}

export default App;
