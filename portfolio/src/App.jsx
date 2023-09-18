import React from 'react';
import './App.scss';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Layout/Navbar";
import Resume from "./pages/Component/Resume";
import Portfolio from "./pages/Component/Portfolio";
import Blogs from "./pages/Component/Blogs";
import Contact from "./pages/Component/Contact";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="Resume" element={<Resume/>}/>
        <Route path="Porfolio" element={<Portfolio/>}/>
        <Route path="Blogs" element={<Blogs/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Route>
    )
  );
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
