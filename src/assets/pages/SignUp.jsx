function SignUp({ isBtn }) {
  return (
    <>
      <form>
        <h2 className="text-center">회원가입</h2>
        <input type="text" placeholder="아이디" name="userid" />
        <input type="password" placeholder="비밀번호" name="userpwd" />
        <input type="tel" placeholder="연락처" name="tel" />
        <input type="email" placeholder="이메일" name="email" />
        <button type="button" onClick={isBtn}>
          로그인
        </button>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}

export default SignUp;
