import './sytle/App.css'
import Combined from './page/combine'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Blog from './page/aboutme'; 
import NavBar from './component/navbar';
function App() {
  return (
   <BrowserRouter>
      <div className='navbardiv'>
        <NavBar/>
      </div> 
      <Routes>
        <Route path='/' element={<Combined/>}/>
      </Routes>
   </BrowserRouter> 
  )
}

export default App
