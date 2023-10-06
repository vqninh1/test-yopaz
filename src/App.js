import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './components/layout/Index';
import About from './pages/about/About';
import HomePage from './pages/homepage/components/HomePage';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
