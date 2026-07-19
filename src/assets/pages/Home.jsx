import "../css/home.css";

function Home() {
  return (
    <div>
      <h2>전체글보기</h2>
      <div className="row text-center">
        <div className="col-4">제목</div>
        <div className="col">작성자</div>
        <div className="col"> 작성일</div>
        <div className="col">조회수</div>
      </div>
    </div>
  );
}

export default Home;
