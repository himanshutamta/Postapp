// import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newposts from "./components/Newpost/Newposts";
import Categories from "./components/categories/Categories";
import Allposts from "./components/all-posts/Allposts";
import Comments from "./components/comment_data/Comments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Allposts />} />
          <Route path="/posts/all_post/:id" element={<Comments />} />
        <Route path="/posts/add_new" element={<Newposts />} />
        <Route path="/posts/categorie" element={<Categories/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
