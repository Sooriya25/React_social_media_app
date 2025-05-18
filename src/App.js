import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import NewPost from "./NewPost.js";
import Postpage from "./Postpage.js";
import Header from "./Header.js";
import Missing from "./Missing.js";
import Footer from "./Footer.js";
import Nav from "./Nav.js";
import EditPost from "./EditPost.js";

import {DataProvider} from "./context/DataContext.js";

function App() {
 

  return (
    <div className="App">
      <DataProvider>
        <Header title={"SOCIAL MEDIA APP "} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<Postpage/>} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Missing/>} />
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );       
}

export default App;
