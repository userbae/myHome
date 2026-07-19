import { Link, Outlet } from "react-router-dom";
import "../css/layout.css";
import Login from "./Login";
import { useState } from "react";
import SignUp from "./SignUp";

function Layout() {
  const [isLogin, setIsLogin] = useState(true);
  const isBtn = () => setIsLogin(!isLogin);

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
          {isLogin ? <Login isBtn={isBtn} /> : <SignUp isBtn={isBtn} />}
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
