import { Link } from "react-router-dom";
import "../css/home.css";
import Japan from "./Japan";

function Home() {
  const loginChack = () => {
    console.log(sessionStorage.getItem("logStatus") != "Yes")
    if(sessionStorage.getItem("logStatus") == null || sessionStorage.getItem("logStatus") != "Yes") {
      alert("아이디를 입력하세요")
      return false}
  }

  return (
    <div onChange={loginChack}>
      <h2>전체글보기</h2>
      <div className="row text-center title" >
        <div className="col-4">제목</div>
        <div className="col">작성자</div>
        <div className="col">작성일</div>
        <div className="col">조회수</div>
      </div>

      <Link to="/introduce" className="row text-center">
        <div className="col-4">자기소개</div>
        <div className="col">배찬혁</div>
        <div className="col">2026-07-19</div>
        <div className="col">999</div>
      </Link>

      <Link to="/japan" className="row text-center">
        <div className="col-4">일본의 주요도시</div>
        <div className="col">배찬혁</div>
        <div className="col">2026-07-19</div>
        <div className="col">999</div>
      </Link>
    </div>
  );
}

export default Home;
