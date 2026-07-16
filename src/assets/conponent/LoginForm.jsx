import { Link } from 'react-router-dom'
import '../css/LoginFormcss.css'

const LoginForm = () => {
  const logFormCheck = (event) => {
    event.preventDefault()
  }
  return (
    <div className='loginForm'>
      {/* <h2>로그인 폼입니다.</h2> */}
      <form onChange={logFormCheck}>
        <div>
          <input type="text" placeholder="아이디 입력" />
          <br />
          <input type="password" placeholder="비밀번호 입력" />
        </div>

        <button>로그인</button>
      </form>
      <Link to="/join">회원가입</Link>

    </div>
  )
}

export default LoginForm