import React, { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home';
import MOCK_DATA from './mocks/MOCK_DATA.json';
import { Button } from './generic/Button';

export default function App() {
  console.log('App Component Rendered');
  const users = useMemo(() => MOCK_DATA, []);
  const [count, setCount] = useState(0);

  const homeProps = { users, setCount, count };
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/Home' />} />
        <Route path='/Home' element={<Home {...homeProps} />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/Edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}
