import Footer from "./components/Footer/Footer";

import BlogNav from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogList from "./pages/BlogList/BlogList";
import BlogArticle from "./pages/BlogList/BlogArticle";
function Tuts() {
  return (
    <h3>tuts</h3>
  )
}

function App() {
  return (
    <>

      <Router>
        <BlogNav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/tutorials' element={<Tuts />}></Route>
          <Route path='/blog' element={<BlogList />}></Route>
          <Route path='/post' element={<BlogArticle />}></Route>
        </Routes>
        <Footer />
      </Router>



    </>

  );
}

export default App;
