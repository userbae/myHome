import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../css/japan.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// 지역별 좌표 데이터
const locations = [
  { id: "tokyo", name: "도쿄", lat: 35.6783, lng: 139.7655 },
  { id: "osaka", name: "오사카", lat: 34.6723, lng: 135.4848 },
  { id: "nagoya", name: "나고야", lat: 35.1833, lng: 136.9 },
  { id: "fukuoka", name: "후쿠오카", lat: 33.5833, lng: 130.4 },
  { id: "sapporo", name: "삿포로", lat: 43.0667, lng: 141.35 },
];

const intros = [
  {
    name: "도쿄",
    img: "src/assets/img/tokyotower.jpg",
    text: `도쿄 (Tokyo) – 현대적 메가시티특징: 일본의 수도이자 세계적인 대도시로, 초고층 빌딩 숲과 오래된 전통 사찰이 공존하는 트렌드의 중심지입니다.대표 명소: 도쿄타워, 시부야 스크램블 교차로, 아사쿠사 센소지.`,
  },
  {
    name: "오사카",
    img: "src/assets/img/osaka.jpg",
    text: `오사카 (Osaka) – 식도락과 상업의 도시  
      특징: '천하의 부엌'이라는 별명답게 다채로운 길거리 음식과 화려한네온사인이 반기는 활기찬 도시입니다.대표 명소: 도톤보리 글리코상,오사카성, 유니버설 스튜디오 재팬.`,
  },
  {
    name: "나고야",
    img: "src/assets/img/nagoya.jpeg",
    text: `나고야 (Nagoya) – 제조업과 역사의 중심특징: 도요타 자동차 본사가 있는 일본 최대의 산업 도시이자, 대형 성곽과 독특한 된장(미소) 미식 문화가 발달했습니다.대표 명소: 나고야성, 오스 상점가, 지브리 파크.`,
  },
  {
    name: "후쿠오카",
    img: "src/assets/img/fukuoka.jpg",
    text: `후쿠오카 (Fukuoka) – 가깝고 편리한 항구 도시특징: 공항과 시내가 매우 가까워 접근성이 뛰어나며, 하천을 따라 늘어선 낭만적인 포장마차 거리가 유명합니다.대표 명소: 나카스 야타이(포장마차) 거리, 캐널시티 하카타.`,
  },
  {
    name: "삿포로",
    img: "src/assets/img/sapporo.jpg",
    text: `삿포로 (Sapporo) – 눈과 자연의 겨울 왕국
    특징: 최북단 홋카이도의 중심지로, 겨울철 거대한 눈조각 축제와 신선한 맥주 및 해산물이 대표적인 특산품입니다.대표 명소: 오도리 공원 (눈축제), 삿포로 맥주 박물관, 스스키노.`,
  },
];

function Japan() {
  const [location, setLocation] = useState(locations[0].name);
  const [center, setCenter] = useState({
    lat: locations[0].lat,
    lng: locations[0].lng,
  });
  const apiKey = "";
  
  return (
    <div>
      {/* 지역 이동 버튼 레이아웃 */}
      <div style={{ marginBottom: "10px" }}>
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => {
              setCenter({ lat: loc.lat, lng: loc.lng });
              setLocation(loc.name);
            }}
          >
            {loc.name}
          </button>
        ))}
      </div>

      <div className="japan">
        <div className="map">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center} // state가 변하면 지도 중심이 이동합니다.
              zoom={13}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        {intros.map(
          (i) =>
            i.name === location && (
              <div className="intro">
                <img src={i.img} alt="" />
                <div className="text">{i.text}</div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default Japan;
