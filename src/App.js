import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './Layout';
import Home from './pages/Home';
import Rate from './pages/Rate';

function App() {
  const days = [
    { day: '일', rate: 3 },
    { day: '월', rate: 4 },
    { day: '화', rate: 2 },
    { day: '수', rate: 1 },
    { day: '목', rate: 5 },
    { day: '금', rate: 4 },
    { day: '토', rate: 3 },
  ];
  const [week, setWeek] = useState(days);
  const [rate, setRate] = useState(5);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home week={week} setWeek={setWeek} />} />
          <Route
            path="/rate/:day"
            element={
              <Rate
                week={week}
                setWeek={setWeek}
                rate={rate}
                setRate={setRate}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
