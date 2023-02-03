import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./views/home/Home'));

function App() {
  return (
    <div>
      <nav className={''}>
        <Link to="/home">Home</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
