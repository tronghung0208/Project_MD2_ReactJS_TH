import React, { useEffect, useState } from "react";

function Slider1() {
  const [activeIndex, setActiveIndex] = useState(0);
  let index = 0;
  let imgNumber = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFjETLlY6nHoWhRqgkNCJMKo5ubdmyGbT_JNUNk5v&s",
    "/image/army-plane_522eaa521c524b8ab285c48421762f22.webp",
    "/image/1_19fortyfive.com_1.jpg",

    "/image/1_19fortyfive.com_1.jpg",
    "/image/army-plane_522eaa521c524b8ab285c48421762f22.webp",
    // "./image/1_19fortyfive.com_1.jpg",
    // "./image/1_19fortyfive.com_1.jpg",
  ];

  const handleRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex >= imgNumber.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex <= 0 ? imgNumber.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000); // Slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="slider">
      <div className="container">
        <div className="slider-content">
          <div className="slider-content-left">
            <div className="slider-content-left-top-container">
              <div
                className="slider-content-left-top"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  backgroundColor: "red",
                }}
              >
                {imgNumber.map((e, i) => (
                  <a href="#" key={i}>
                    <img src={e} alt="photo" />
                  </a>
                ))}
              </div>
              <div className="slider-content-left-top-btn ">
                <i
                  className="fa-solid fa-chevron-left"
                  onClick={() => handleLeft()}
                />
                <i
                  className="fa-solid fa-chevron-right"
                  onClick={() => handleRight()}
                />
              </div>
            </div>
            <div className="slider-content-left-bottom">
              <li
                onClick={() => setActiveIndex(0)}
                className={activeIndex === 0 && "active"}
              >
                tiêu đề 1
              </li>
              <li
                onClick={() => setActiveIndex(1)}
                className={activeIndex === 1 && "active"}
              >
                tiêu đề 2
              </li>
              <li
                onClick={() => setActiveIndex(2)}
                className={activeIndex === 2 && "active"}
              >
                tiêu đề 3
              </li>
              <li
                onClick={() => setActiveIndex(3)}
                className={activeIndex === 3 && "active"}
              >
                tiêu đề 4
              </li>
              <li
                onClick={() => setActiveIndex(4)}
                className={activeIndex === 4 && "active"}
              >
                tiêu đề 5
              </li>
            </div>
          </div>
          <div className="slider-content-right">
            <li>
              <a href="">
                {" "}
                <img src="./image/slider-right-1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./image/slider-right-1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./image/slider-right-1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./image/slider-right-1.jpg" alt="" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider1;
