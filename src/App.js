import logo from './logo.svg';
import './App.css';
import { winterHolidays } from './winterHolidays';
import { Button, Card, Container, Row } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Welcome} from './Welcome';
import {Holidays, holidays} from './Holidays';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}> </Route>
        <Route path='/holidays' element={<Holidays/>}/>
      </Routes>
    </Router>
  );
}

export default App;
