import Slider from "react-slick";
import styles from "../styles/content.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 400,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default function Content() {
  return (
    <div>
      <Slider {...settings} className={styles.customCarousel}>
        <div className={styles.card}>
          <img
            className={styles.carouselImage}
            src="/beijo-restaurante.jpg"
            alt="beijo-restaurante"
          />
          <p className={styles.carouselText}>2023</p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.carouselImage}
            src="/caminhada-praia.jpg"
            alt="caminhada-praia"
          />
          <p className={styles.carouselText}>2023</p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.carouselImage}
            src="/deitados-filtro.jpg"
            alt="deitados-filtro"
          />
          <p className={styles.carouselText}>2024</p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.carouselImage}
            src="/poze-restaurante.jpg"
            alt="poze-restaurante"
          />
          <p className={styles.carouselText}>2023</p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.carouselImage}
            src="/tesla-dormindo.jpg"
            alt="tesla-dormindo"
          />
          <p className={styles.carouselText}>2024</p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.carouselImage}
            src="/caminhada-praia.jpg"
            alt="caminhada-praia"
          />
          <p className={styles.carouselText}>2023</p>
        </div>
      </Slider>
    </div>
  );
}
