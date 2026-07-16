import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "./assets/pages/Layout"
import MainView from "./assets/pages/MainView"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainView/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
