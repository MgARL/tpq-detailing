import './App.css';
import './assets/flatly.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './tpq-logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Comps
import MyNavbar from './components/MyNavbar'
import Introduction from './components/Introduction'
import Information from './components/Information'
import Pricing from './components/Pricing/Pricing'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <div className='App'>
      <Router>
        <MyNavbar logo={logo} Container={Container} Link={Link} />
        <div className='footer-fill d-flex justify-content-center align-items-center'>
          <Container className="main-container bg-tpq my-5 text-light">
            <ScrollToTop>
              <Routes>
                <Route path='/' element={[<Introduction key='intro' />, <Information Row={Row} Col={Col} key='info' />]} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/about-us' element={<AboutUs Row={Row} Col={Col} />} />
              </Routes>
            </ScrollToTop>
          </Container>
        </div>
        <Footer Container={Container} Row={Row} Col={Col} logo={logo} Link={Link} />

      </Router>
    </div>
  );
}

export default App;
