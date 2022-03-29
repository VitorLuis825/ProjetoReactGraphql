import './App.css'
import {Routes, Route} from 'react-router-dom'
import useFetch from './hooks/useFetch';
import { useEffect } from 'react';

import Header from './components/header/header.js'
import Aside from './components/aside/aside.js';
import Calendario from './components/calendario/calendario.js'


function App() {

  return (

      <div className="App">
        <Header />
        <Aside />
        <Routes>
          <Route path='/*' element={<Calendario />}/>
        </Routes>
      </div>
  );
}

export default App;
