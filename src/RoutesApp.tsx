import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { Posts } from "../Pages/Posts/Posts"
import {PostsId} from "../Pages/PostsId/PostsId"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/posts" element={<Posts/>}></Route>
    <Route path="/posts/:id" element={<PostsId/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
