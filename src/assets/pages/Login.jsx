import { useState } from "react"
import '../css/login.css'

function Login() {
  // 아이디, 비번을 보관할 변수
  const [loginData, setLoginData] = useState({})
  
  // form 데이터를 useState변수에 셋팅
  const setLoginForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData((p)=>{return{ ...p, [name]: value}})
    // setLoginData({...loginData,[name]: value})
    console.log(loginData)
  }
  // 아이디, 비번이 있는지 확인
  const logFormCheck = (event) => { 
    event.preventDefault()
    if(loginData.userid == "" || loginData.userid == undefined) return alert("아이디를 입력하세요");
    if(loginData.userpwd == "" || loginData.userpwd == undefined) return alert("비밀번호를 입력하세요");

    // 비동기식으로 백엔드
    // alert("백엔드 수행함")
    location.href = "/"
  }
  return (
    <div className="main">
      <h1 style={{ textAlign: 'center', marginTop: "50px" }}>로그인</h1>
      <form  onSubmit={logFormCheck}>
        <div className="mb-3 mt-3">
          <label htmlFor="userid" className="form-label"> 아이디</label >
          <input type="text" className="form-control" id="userid"
            placeholder="아이디입력" name="userid"
            onChange={setLoginForm}/>
        </div>
        <div className="mb-3">
          <label htmlFor="userpwd" className="form-label">비밀번호</label>
          <input type="password" className="form-control" id="userpwd"
            placeholder="비밀번호입력" name="userpwd" 
            onChange={setLoginForm}/>
        </div>
        <div className="d-grid">
          <button  className="btn btn-primary">Login</button>

        </div>
      </form>
    </div>
  )
}
export default Login