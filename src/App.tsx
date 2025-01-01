import { Navigation } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Staking } from './pages';
import { WalletProvider } from './utils/WalletProvider';

const App = () => {
  return (
    <WalletProvider>
      <Navigation />
      <main className="mt-[2em] w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
      </main>
    </WalletProvider>
  );
};

export default App;
