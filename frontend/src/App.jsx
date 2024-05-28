import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./components/Content/blogs/pages/Blog"
import Marketplace from "./components/Marketplace/Marketplace"
import Footer from "./components/Footer/Footer"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/blogs" element={<Blog/>}/> */}
      {/* <Route path="/marketplace" element={<Marketplace/>}/> */}
      <Route path="/footer" element={<Footer/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
