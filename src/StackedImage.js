import React, { useState } from "react";

const imageList = [
    "blue1.png",
    "blue2.png",
    "blue3.png",
    "purple1.png",
    "purple2.png",
  ];

const StackedImages = () => {
  const [images, setImages] = useState([]);

  const addRandomImage = () => {
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    setImages((prevImages) => [...prevImages, `/images/${randomImage}`]);
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "300px", border: "1px solid #ccc" }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
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
      <button onClick={addRandomImage} style={{ position: "absolute", bottom: 10, left: 10, zIndex: 100 }}>
        画像を追加
      </button>
    </div>
  );
};

export default StackedImages;

