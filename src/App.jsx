
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

function App() {

  const myRout = createBrowserRouter(
    createRoutesFromElements(
      <Route index element={<Home/>}/>
    )
  )

  return (
    <>
     
     <RouterProvider router={myRout}/>
    
    </>
  )
}

export default App
