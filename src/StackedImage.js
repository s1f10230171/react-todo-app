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
    <div style={{ position: "relative", width: "400px", height: "550px", border: "1px solid #ccc", left: "10%", marginBottom:"30px"}}>
      <img src="/images/kabin.png"
        style={{
          width: "230px", 
          height: "auto",       
          position: "absolute", 
          bottom: "10px",       
          right: "98px" ,
          zIndex: 9999      
        }} />
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={`image-${index}`}
          style={{
            position: "absolute",
            top: "20px",
            left: "10%",
            width: "75%",
            height: "75%",
            objectFit: "cover",
            zIndex: index,
          }}
        />
      ))}
    </div>
  );

};

export default StackedImages;

