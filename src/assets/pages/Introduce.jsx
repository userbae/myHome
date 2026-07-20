import "../css/introduce.css";

function Introduce() {
  return (
    <div>
      <h2>자기소개 페이지</h2>
      <div className="introduce">
        <img src="src/assets/img/bea.jpg" alt="introduce" />
        <pre className="">
          안녕하세요 배찬혁입니다.<br/>
          출생 : 1996년 5월 3일<br/>
          취미 : 게임<br/>
          희망하는 직종 : 풀스택
        </pre>
      </div>
    </div>
  );
}

export default Introduce;
