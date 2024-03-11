import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Bar from './components/Line';
import Error from './routes/Error';
import Landing from './routes/Main';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
