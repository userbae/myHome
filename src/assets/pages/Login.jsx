import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/form.css"

function Login() {
  const [data, setData] = useState({ userid: "", userpwd: "" });

  const dataChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((p) => {
      return { ...p, [name]: value };
    });
  };
  const formCheck = (event) => {
    event.preventDefault();
    const Check = sessionStorage.getItem("logStatus")
    
    if (data.userid == "") return alert("아이디를 입력해주세요");
    if (data.userpwd == "") return alert("비밀번호를 입력해주세요");
    // 비동기식으로 백엔드
    // alert("백엔드 수행함");
    // 홈화면으로 이동
    
    sessionStorage.setItem("logStatus", "Yes")
    location.href = "/";
  };
  return (
    <div className="container-xl form">
      <Link to="/"><h2>Blog</h2></Link>
      <div>로그인</div>
      <form onSubmit={formCheck}>
        <input
          type="text"
          placeholder="아이디 입력"
          id="userid"
          name="userid"
          onChange={dataChange}
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
          id="userpwd"
          name="userpwd"
          onChange={dataChange}
        />
        <button type="submit">로그인</button>
        <button type="button">
          <Link to="/signup">회원가입
          </Link>
          
        </button>
      </form>
    </div>
  );
}

export default Login;
