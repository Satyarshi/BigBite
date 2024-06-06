// Carousel.js
import React, { useRef } from "react";
import styles from "./Carousel.module.css";
import CarauselCards from "./CarauselCards";

const Carousel = () => {
  const cards = [
    { image: "/images/Biryani_2.avif" },
    { image: "/images/Burger.avif" },
    { image: "/images/Cakes.avif" },
    { image: "/images/Chinese.avif" },
    { image: "/images/Coffee.avif" },
    { image: "/images/Dhokla.avif" },
    { image: "/images/Dosa.avif" },
    { image: "/images/Momos.avif" },
    { image: "/images/Noodles.avif" },
    { image: "/images/Pakodas.avif" },
    { image: "/images/Pasta.avif" },
    { image: "/images/Pav_Bhaji.avif" },
    { image: "/images/Pizza.avif" },
    { image: "/images/Patty.avif" },
    { image: "/images/Pure_Veg.avif" },
    { image: "/images/Rolls.avif" },
    { image: "/images/Samosas.avif" },
    { image: "/images/Shakes.avif" },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    const box = carouselRef.current;
    if (box) {
      const itemWidth = box.querySelector(".card-img").clientWidth + 100;
      box.scrollLeft -= itemWidth;
    }
  };

  const scrollRight = () => {
    const box = carouselRef.current;
    if (box) {
      const itemWidth = box.querySelector(".card-img").clientWidth + 100;
      box.scrollLeft += itemWidth;
    }
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-3 min-w-[320px] px-4">
      <p className="md:text-2xl font-semibold">What's on your mind?</p>
      <div className={styles.carouselContainer}>
        <img
          className={`w-10 h-10 ${styles.btnPrev}`}
          src="https://img.icons8.com/?size=100&id=37590&format=png&color=000000"
          alt="prev"
          onClick={scrollLeft}
        />
        <div className={styles.carouselCard} ref={carouselRef}>
          {cards.map((card, index) => (
            <CarauselCards key={index} image={card.image} />
          ))}
        </div>
        <img
          className={`w-10 h-10 ${styles.btnNext}`}
          src="https://img.icons8.com/?size=100&id=37589&format=png&color=000000"
          alt="next"
          onClick={scrollRight}
        />
      </div>
      <div
        className={`w-[95%] border-b-2 rounded mt-3 m-auto ${styles.line}`}
      ></div>
    </div>
  );
};

export default Carousel;
