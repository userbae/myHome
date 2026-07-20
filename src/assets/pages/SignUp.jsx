import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({});

  const setForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((p) => {
      return { ...p, [name]: value }
    })
    console.log(data)
  }

  const formCheck = (event) => {
    event.preventDefault();
    if (data.userid == "" || data.userid == undefined) return alert("아이디를 입력하세요");
    var regExp = /^[a-zA-Z]{1}[\w]{4,11}$/
    if (!regExp.test(data.userid)) {
      alert("아이디 첫번째 글자는 영어 대소문자이고\n영어대소문자, 숫자, _만 허용합니다.\n아이디의 총글자수는 5~12글자 사이여야 합니다.")
      return
    }
    if (data.userpwd == "" || data.userpwd == undefined) return alert("비밀번호를 입력하세요");
    if (data.username == "" || data.username == undefined) return alert("이름을 입력하세요");
    if (data.tel == "" || data.tel == undefined) return alert("전화번호를 입력하세요");
    regExp = /^(010|02|031|041)[0-9]{3,4}[0-9]{4}$/
    if (!regExp.test(data.tel)) {
      alert("연락처를 잘못입력하였습니다.")
      return false
    }

    if (data.email == "" || data.email == undefined) return alert("이메일을 입력하세요");
    regExp = /^[A-Za-z0-9]{5,12}@[A-Za-z0-9]{3,7}.[a-z]{2,3}([.][a-z]{2,3})?$/
    if (!regExp.test(data.email)) {
      alert("잘못된 이메일 주소 입니다.")
      return
    }

    location.href = "/";
  }
  return (
    <div className="container-xl form">
        <Link to="/"><h2>Blog</h2></Link>
        <div>회원가입</div>
      <form onSubmit={formCheck}>
        <input type="text" placeholder="아이디" name="userid" id="userid" onChange={setForm} />
        <input type="password" placeholder="비밀번호" name="userpwd" id="userpwd" onChange={setForm} />
        <input type="text" placeholder="이름" name="username" id="username" onChange={setForm} />
        <input type="tel" placeholder="연락처" name="tel" id="tel" onChange={setForm} />
        <input type="email" placeholder="이메일" name="email" id="email" onChange={setForm} />
        <button type="button">
          <Link to="/login">로그인
          </Link>
        </button>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
