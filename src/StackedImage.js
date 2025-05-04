import React, { useState, useEffect, useRef } from "react";

function StackedImages({getThisWeekClearCount}) {
  const [images, setImages] = useState([]);
  const imageList = [
    "blue1.png",
    "blue2.png",
    "yellow1.png",
    "yellow2.png",
    "white1.png",
    "white2.png",
    "white3.png",
    "orange1.png",
    "orange2.png",
    // "pink1.png", 
    "pink2.png",
    "purple1.png", 
    "red1.png", 
    "blue1.png",
    "yellow1.png",
    "white1.png",
  ];
  const currentIndex = useRef(0);
  const addSequentialImage = () => {
    if (currentIndex.current >= imageList.length) return; // 画像が尽きたら止める

    const imageName = imageList[currentIndex.current];
    currentIndex.current += 1;

    setImages(prevImages => [
      ...prevImages,
      { src: `/images/${imageName}`, offset: 0 }
    ]);
  };

  useEffect(() => {
    const count = getThisWeekClearCount();
    for (let i = 0; i < count && i < imageList.length; i++) {
      addSequentialImage();
    }
  }, [getThisWeekClearCount]);

  return (
    <div style={{ position: "relative", width: "300px", height: "400px", border: "1px solid #ccc" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={`image-${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: index,
          }}
        />
      ))}
    </div>
  );

};

export default StackedImages;

