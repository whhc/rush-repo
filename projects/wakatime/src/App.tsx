import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navbar/navbar';
import Dashboard from './views/dashboard/Dashboard';
import Goals from './views/goals/Goals';
import Projects from './views/projects/Projects';

const Home = lazy(() => import('./views/home/Home'));

function withNavbar(El: JSX.Element) {
  return (
    <>
      <Navbar />
      {El}
    </>
  );
}

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={withNavbar(<Dashboard />)} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
