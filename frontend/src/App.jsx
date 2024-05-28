import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./components/Content/blogs/pages/Blog"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blog/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
