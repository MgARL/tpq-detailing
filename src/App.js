import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './tpq-logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MyNavbar from './components/MyNavbar'
import Introduction from './components/Introduction'
import Information from './components/Information'
import ContactForm from './components/ContactForm'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <MyNavbar logo={logo} Container={Container} />
      <div className="App">
        <Introduction Container={Container}/>
      </div>
      <Footer Container={Container} Row={Row} Col={Col} logo={logo}/>

    </>
  );
}

export default App;
