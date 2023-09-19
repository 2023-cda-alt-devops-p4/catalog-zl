import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;