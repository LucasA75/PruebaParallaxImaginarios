import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import "./App.css"
import NoPage from './pages/NoPage/NoPage';
import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import ChileEnLaPQ from './pages/ChileEnLaPQ/ChileEnLaPQ';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} errorElement={<NoPage/>} />
      <Route path="Nosotros" element={<Nosotros />} />
      <Route path="Chile" element={<ChileEnLaPQ />} />
      <Route path="Nosotros" element={<Nosotros />} />
    </>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;