import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Marketplace from "./components/Marketplace/Marketplace"
import Blog from "./components/Content/blogs/pages/Blog"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/marketplace" element={<Marketplace/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
