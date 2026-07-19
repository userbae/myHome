import { useState } from "react";

function Join() {
  const [data, setData] = useState({});

  // form 데이터를 useState변수에 셋팅
  const setForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((p) => {
      return { ...p, [name]: value };
    });
    // setLoginData({...loginData,[name]: value})
  };
  // 아이디, 비번이 있는지 확인
  const formCheck = (event) => {
    event.preventDefault();
    if (data.userid == "" || data.userid == undefined) return;
    if (data.userpwd == "" || data.userpwd == undefined) return;
    if (data.username == "" || data.username == undefined) return;
    if (data.tel == "" || data.tel == undefined) return;

    // 비동기식으로 백엔드
    alert("백엔드 수행함");
  };
  return (
    <div className="main">
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>회원가입</h1>
      <form onSubmit={formCheck}>
        <div className="mb-3 mt-3">
          <label htmlFor="userid" className="form-label">
            {" "}
            아이디
          </label>
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="아이디입력"
            name="userid"
            onChange={setForm}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userpwd" className="form-label">
            비밀번호
          </label>
          <input
            type="password"
            className="form-control"
            id="userpwd"
            placeholder="비밀번호입력"
            name="userpwd"
            onChange={setForm}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            이름
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="이름입력"
            name="username"
            onChange={setForm}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            전화번호
          </label>
          <input
            type="number"
            className="form-control"
            id="tel"
            placeholder="전화번호 입력"
            name="tel"
            onChange={setForm}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Join;
