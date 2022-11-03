import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Welcome} from './Welcome';
import {Holidays} from './Holidays';
import {HolidayDetails} from './HolidayDetails';
import {HolidayContext} from './HolidayContext';
import { useState } from 'react';

function App() {

  const [holidayDetails, setHolidayDetails] = useState({});

  const gettersSetters = {holidayDetails, setHolidayDetails};

  return (
    <HolidayContext.Provider value={gettersSetters}>
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}> </Route>
        <Route path='/holidays' element={<Holidays/>}/>
        <Route path='/holidays/:name' element={<HolidayDetails/>}/>
      </Routes>
    </Router>
    </HolidayContext.Provider>
  );
}

export default App;
