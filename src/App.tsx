import { Navigation } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Staking, Tickets } from './pages';

const App = () => {
  return (
    <>
      <Navigation />
      <main className="mt-8 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
