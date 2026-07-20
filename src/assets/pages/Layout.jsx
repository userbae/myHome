import { Link, Outlet } from "react-router-dom";
import "../css/layout.css";
import Login from "./Login";
import { useState } from "react";
import SignUp from "./SignUp";

function Layout() {
  const logoutFnc = () => {
    // 로그인 정부 삭제 후 홈페이지 이동
    sessionStorage.removeItem("logStatus")
    location.href = "/"
  }
  return (
    <div className="container-xl">
      <Link to="/">
        <div className="banner">
          <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
            <h1>BAE Blog</h1>
            <strong>new3930@gmail.com</strong>
          </div>

          <img src="src/assets/img/star.png" alt="banner" />
        </div>
      </Link>

      <div className="main">
        <div className="loginForm">
          {(sessionStorage.getItem("logStatus") == null || sessionStorage.getItem("logStatus") != "Yes")
            ? (<div >
              <Link to="/login" style={{backgroundColor:"orange", textAlign: "center",}}>Blog 로그인</Link>
              <Link to="/signup" style={{textAlign:"center"}} >회원가입</Link>
            </div>) :
            (<div className="inForm">
              <h2 className="text-center"></h2>
              <img src="src/assets/img/people.png" />
              <button onClick={logoutFnc}>로그아웃</button>
            </div>)}

        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
