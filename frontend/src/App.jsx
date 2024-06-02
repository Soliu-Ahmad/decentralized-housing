import Home from "./Pages/Home/Home"
import {BrowserRouter,  Routes, Route, Router } from "react-router-dom"
import Marketplace from "./components/Marketplace/Marketplace"
import Blog from "./components/Content/blogs/pages/Blog"
import Footer from "./components/Footer/Footer"
import MarketplaceForm from "./components/MarketplaceForm/MarketplaceForm"
import { TransactionProvider } from './contest/TransactionContext';

function App() {

  return (
   <TransactionProvider>
  <BrowserRouter>
   {/* <Router> */}
    {/* <div> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/marketplace" element={<Marketplace/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/marketplace-form" element={<MarketplaceForm/>}/>
    </Routes>
    {/* </div> */}
    {/* </Router> */}
    </BrowserRouter>
 </TransactionProvider>
  )
}

export default App
