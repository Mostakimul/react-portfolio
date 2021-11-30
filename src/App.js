import { Route, Routes } from 'react-router';
import './App.css';
import About from './component/About';
import BaseLanding from './component/BaseLanding';
import Blogs from './component/Blogs';
import Contact from './component/Contact';
import Education from './component/Education';
import Experiences from './component/Experiences';
import Home from './component/Home';
import Portfolios from './component/Portfolios';
import SingleProject from './component/SingleProject';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLanding />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Portfolios />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="/education" element={<Education />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
