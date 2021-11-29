import { Route, Routes } from 'react-router';
import './App.css';
import About from './component/About';
import BaseLanding from './component/BaseLanding';
import Contact from './component/Contact';
import Education from './component/Education';
import Experiences from './component/Experiences';
import Home from './component/Home';
import Portfolios from './component/Portfolios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLanding />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
