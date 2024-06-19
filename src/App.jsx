import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';


function App() {
  return (
    <div className='overflow-x-hidden w-screen min-h-screen flex flex-col font-inter bg-[#F2F5FF]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App