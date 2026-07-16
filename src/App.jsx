import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "./assets/pages/Layout"
import Home from "./assets/pages/Home"
import Login from "./assets/pages/Login"
import Join from "./assets/pages/Join"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/join" element={<Join/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
