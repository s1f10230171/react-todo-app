import React, { useState } from "react";

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
    "pink1.png", 
    "pink2.png",
    "purple1.png", 
    "red1.png", 
  ];

const getRandomOffset = () => Math.floor(Math.random() * 11) - 5;

const StackedImages = () => {
  const [images, setImages] = useState([]);

  const addRandomImage = () => {
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    const offset = getRandomOffset();
    setImages((prevImages) => [...prevImages, { src: `/images/${randomImage}`, offset }]);
  };

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
            left: `${img.offset}px`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: index,
          }}
        />
      ))}
      <button onClick={addRandomImage} style={{ position: "absolute", bottom: 10, left: 10, zIndex: 100 }}>
        画像を追加
      </button>
    </div>
  );
};

export default StackedImages;

