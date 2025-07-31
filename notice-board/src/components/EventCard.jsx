import { useState, useRef, useEffect } from "react";
import "./EventCard_module.css";
import { API_SERVER_HOST } from "../api/API_SERVER_HOST";

const host = API_SERVER_HOST;

function EventCard({ cardWidth, page, hidenBtn, image }) {
  const [list, setList] = useState(image); // 이미지 리스트
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 페이지 인덱스

  const listRef = useRef(null); //  <ul> 태그 직접 조작

  const scrollToIndex = (pageIndex) => {
    const target = listRef.current.children[pageIndex];
    if (target) {
      const scrollX = target.offsetLeft;
      listRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
      setCurrentIndex(pageIndex);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     scrollRight(); // 5초마다 오른쪽으로 이동
  //   }, 5000);
  //   return () => clearInterval(interval); // 언마운트 시 제거
  // }, [currentIndex]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < list.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const carouselStyle = {
    position: "relative",
    width: `calc((${cardWidth}px * ${page}) + (30px * (${page}-1)))` /* 카드 3개 + gap 2개 */,
    overflow: "hidden",
    margin: "0 auto",
    padding: "10px 0",
    "--card-width": `${cardWidth}px`,
  };

  return (
    <div style={carouselStyle}>
      {hidenBtn ? (
        <></>
      ) : (
        <button className="scroll-btn left" onClick={scrollLeft}>
          {"<"}
        </button>
      )}
      <ul className="carousel-list" ref={listRef}>
        {list.map((card, idx) => (
          <li
            key={idx}
            className={`event-container ${
              idx === list.length - 1 ? "last-image" : ""
            }`}
          >
            <img src={card.imgSrc} alt="이미지" />
          </li>
        ))}
      </ul>
      {hidenBtn ? (
        <></>
      ) : (
        <button className="scroll-btn right" onClick={scrollRight}>
          {">"}
        </button>
      )}

      <div className="indicator-wrapper">
        {image.map((_, idx) => (
          <span
            key={idx}
            className={`indicator-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default EventCard;
