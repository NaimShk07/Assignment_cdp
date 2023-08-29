import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./04_mini_project.html/pages/pages/Signup";
import Login from "./04_mini_project.html/pages/pages/Login";
import Footer from "./04_mini_project.html/pages/components/Footer";
import Headerrr from "./04_mini_project.html/pages/components/Headerrr";
import Home from "./04_mini_project.html/pages/pages/Home";
import Mens from "./04_mini_project.html/pages/pages/Mens";
import Womens from "./04_mini_project.html/pages/pages/Womens";
import Kids from "./04_mini_project.html/pages/pages/Kids";
import Contact from "./04_mini_project.html/pages/pages/Contact";
import About from "./04_mini_project.html/pages/pages/About";
import Blog from "./04_mini_project.html/pages/pages/Blog";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./04_mini_project.html/pages/pages/Profile";

function App() {

  return (
    <>

      {/* Project */}
      <BrowserRouter>
      <Headerrr />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<> <Home />  </>}></Route>
          <Route path="/login" element={<> <Login />  </>}></Route>
          <Route path="/signup" element={<> <Signup />  </>}></Route>

          <Route path="/home" element={<> <Home />  </>}></Route>
          <Route path="/men" element={<> <Mens />  </>}></Route>
          <Route path="/women" element={<> <Womens />  </>}></Route>
          <Route path="/kid" element={<> <Kids />  </>}></Route>
          <Route path="/contact" element={<> <Contact />  </>}></Route>
          <Route path="/about" element={<> <About />  </>}></Route>
          <Route path="/blog" element={<> <Blog />  </>}></Route>
          <Route path="/profile" element={<> <Profile />  </>}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
