import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './components/layout/Index';
import HomePage from './pages/homepage/components/HomePage';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
