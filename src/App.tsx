import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Uml from './pages/Uml';
import Merise from './pages/Merise';
import Banner from './component/Banner';
import UmlCategory from './pages/UmlCategory';
import UmlDiagram from './pages/UmlDiagram';

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home/>} />
      <Route path='/UML/' element={<Uml />} />
      <Route path='/UML/:category/:name' element={<UmlDiagram />} />
      <Route path='/UML/:category/' element={<UmlCategory />} />
      <Route path='/merise/' element={<Merise/>} />
      <Route path='/Merise/:category/:name' element={<Merise/>} />
      <Route path='/Merise/:category/' element={<Merise/>} />
    </Routes>
    </>
  );
}

export default App;