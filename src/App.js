import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Holidays } from './Holidays';
import { HolidayDetails } from './HolidayDetails';
import { HolidayContext } from './HolidayContext';
import {HolidayMovie} from './HolidayMovie';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import winterImage2 from './holidayImages/winterImage2.png';

function App() {

  const [holidayDetails, setHolidayDetails] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(winterImage2);

  const gettersSetters = { holidayDetails, setHolidayDetails, backgroundImage, setBackgroundImage };

  return (
    <HolidayContext.Provider value={gettersSetters}>
      <Container fluid style={{ display: "flex", flexDirection: "column", minHeight: "100vh", textAlign: "center", justifyContent: "center", backgroundImage: `url(${backgroundImage})` }}>
          <Router>
            <Routes>
              <Route path='/' element={<Welcome />}> </Route>
              <Route path='/holidays' element={<Holidays />} />
              <Route path='/holidays/:name' element={<HolidayDetails />} />
              <Route path='/holidayMovie/:name' element={<HolidayMovie/>}/>
            </Routes>
          </Router>
      </Container>
    </HolidayContext.Provider>
  );
}

export default App;
