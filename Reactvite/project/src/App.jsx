
import './App.css'
// import Navbar from './components/Navbar'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import AboutUs from './pages/AboutUs'
// import Contact from './pages/Contact'
// import Error404 from './pages/Error404'
// import Edit from './pages/Edit'
// import Add from './pages/Add'
import Layout from './pages/Layout'
// import Login1 from './pages/Login1'
// import Login2 from './pages/Login2'
// import Login3 from './pages/Login3'
// import Login4 from './pages/Login4'
// import <Shop></Shop>
function App() {

  return (
    <>
       {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Layout/>
{/* <Login2/> */}
    </>
  )
}

export default App
