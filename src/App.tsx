import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Uml from './pages/Uml';
import Merise from './pages/Merise';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home/>} />
      <Route path='/uml' element={<Uml/>} />
      <Route path='/merise' element={<Merise/>} />
    </Routes>
    </>
  );
}

export default App;