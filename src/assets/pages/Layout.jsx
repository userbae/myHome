import { Link, Outlet } from "react-router-dom"
import LoginForm from "../conponent/LoginForm"
import Navbar from "../conponent/Navbar"


function Layout() {
  return (
    <div className="body" style={{ backgroundColor: "wheat",  height: "100vh", display:"flex", alignItems:"center",justifyContent:"center" }}>
      <div style={{ backgroundColor: "white", borderRadius: "40px", display: "flex", padding:"20px", width:"90%", height: "80%"}}>
        <div style={{ marginRight:"50px", display:"flex", flexDirection:"column", gap:"10px"}}>
          <LoginForm />
          <Navbar />
        </div>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout