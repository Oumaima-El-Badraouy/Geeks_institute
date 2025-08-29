import Home from "./Components/PagesStatic/Home.jsx"
import Navbar from "./Components/PagesStatic/Navbar.jsx"
import Login from "./Components/auth/Login.jsx";
import Signup from "./Components/auth/Signup.jsx";
import Contact from "./Components/PagesStatic/Contact.jsx";
import Example from "./Components/Services/Example.jsx";
import About from "./Components/PagesStatic/About.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/user" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App
