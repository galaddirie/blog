import Footer from "./components/Footer/Footer";

import BlogNav from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Home from "./pages/Home/Home";
import BlogList from "./pages/BlogList/BlogList";
import BlogArticle from "./pages/BlogList/BlogArticle";
function Tuts() {
  return (
    <h3>tuts</h3>
  )
}
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})
function App() {
  return (
    <>

      <Router>
        <BlogNav />
        <ApolloProvider client={client}>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tutorials' element={<Tuts />}></Route>
            <Route path='/blog' element={<BlogList />}></Route>
            <Route path='/post/:slug' element={<BlogArticle />}></Route>
            <Route path='/tag/:value' element={<BlogArticle />}></Route>
          </Routes>
          <Footer />
        </ApolloProvider>
      </Router>



    </>

  );
}

export default App;
