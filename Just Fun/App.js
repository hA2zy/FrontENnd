import React, { useEffect, useState } from "react";
import Side from "./side_bar";

function App() {
  const { kakao } = window;
  const [mapCreated, setMapCreated] = useState(false);

  useEffect(() => {
    if (kakao && !mapCreated) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);
      setMapCreated(true);
    }
  }, [kakao, mapCreated]); // kakao와 mapCreated가 변경될 때마다 실행

  return (
    <>
      <div
        className="map"
        style={{
          width: "100wv",
          height: "50vh",
        }}
        id="map"
      ></div>
      <Side />
    </>
  );
}

export default App;
