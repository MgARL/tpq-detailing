import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './tpq-logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import MyNavbar from './components/MyNavbar'
import Introduction from './components/Introduction'
import Information from './components/Information'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Router>
        <MyNavbar logo={logo} Container={Container} Link={Link} />
        <Container className="App bg-primary my-5 text-light">
            <Routes>
              <Route path='/' element={[<Introduction key='intro'/>,  <Information Row={Row} Col={Col} Button={Button} key='info'/> ]}/>
              <Route path='/pricing' element={<Pricing />}/>
              <Route path='/about-us' element={<AboutUs Row={Row} Col={Col}/>} />
            </Routes>
        </Container>
        <Footer Container={Container} Row={Row} Col={Col} logo={logo} Link={Link} />

      </Router>
    </>
  );
}

export default App;


// / <>
    //   <MyNavbar logo={logo} Container={Container} />
    //   <Container className="App bg-primary my-5 text-light">
    //     <Introduction />
    //     <Information Row={Row} Col={Col} Button={Button} />
    //   </Container>
    //   <Footer Container={Container} Row={Row} Col={Col} logo={logo}/>

    // </>
