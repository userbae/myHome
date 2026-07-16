import { Link, Outlet } from "react-router-dom"
import "../css/layout.css"

function Layout() {
  return (
    <div className="container">
      <div className=" top-layout">
        <div style={{flex:"1.5"}}><Link to="">홈</Link></div>
        <div ><Link to="/login">로그인</Link></div>
        <div ><Link to="/join">회원가입</Link></div>
        {/* <div ><Link to="">로그아웃</Link></div>
        <div className="col"><Link to="">마이페이지</Link></div> */}
      </div>
    
      <Outlet />
    </div>
  )
}

export default Layout