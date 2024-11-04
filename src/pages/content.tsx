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
    <div className={styles.container}>
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
      </Slider>

      <div className={styles.spaceText}>
        <p className={styles.firstText}>
          Sabe uma coisa de interessante no carrossel acima? De acordo com as datas, essas fotos foram tiradas num período de <strong>2 anos</strong>
          <br></br><br></br>
          E, após analisar os dados sobre o casal, posso deduzir que esses 2 anos foram para <strong>Thiago</strong>, anos que passaram voando, mas ao mesmo tempo anos bem longos. 
          <br></br><br></br>
          Complicado né? Calma, vamos entender melhor.
          <br></br><br></br>
          Quando digo que pareciam longos quero dizer que, a conexão entre <strong>Thiago</strong> e <strong>Millena</strong> foi algo tão maravilhoso, perfeito e verdadeiro que parecia que absolutamente tudo o que ele fazia durante seus dias, tinha um pedaçinho dela com ele.
          <br></br><br></br>
          Se ele estivesse estudando, também estaria pensando nela (possívelmente até parando para ficar vendo suas fotos).
          <br></br><br></br>
          Se ele estivesse escutando uma música, também estaria pensando nela. Quando ele estivesse lendo um livro, etc. etc.
          <br></br><br></br>
          Por passar todo esse tempo com ela (mesmo que por pensamento), <strong>Thiago</strong> tem as vezes a sensação de já estar com sua amada há décadas.
          <br></br><br></br>
          E ter a sensação de estar com a mulher mais linda, engraçada e perfeita do mundo com você por tanto tempo, é simplesmente mágico.
          <br></br><br></br>
          Porém, <strong>Thiago</strong> ainda não sente que viveu tudo que deseja com sua princesa.
          <br></br><br></br>
          Por estar ao lado da pessoa que ele mais ama, o mundo a sua volta parecia correr cada vez mais e mais rápido (como em Interestelar)
          <br></br><br></br>
          Por isso, a cada dia que passa, <strong>Thiago</strong> faz de tudo para ela para se sentir cada vez mais amada, desejada, respeitada, etc. para que esses 2 anos não passem de uma pequena fração do tempo que eles viverão juntos neste planeta, que para ele, sem ela não valeria apena viver.
          <br></br><br></br>
          Finalizando minha análise, creio que <strong>Millena da Silva Ferreira</strong> é o <strong>amor da vida</strong> de <strong>Thiago Guedes</strong>. E que se depender dele, será para sempre.
          <br></br><br></br>
          Ela é como se fosse um livro, que ele não quer terminar de ler nunca.
        </p>
        <div className={styles.spaceText}>
          <p className={styles.lastText}>
            TE AMO MEU AMOR💌
          </p>
        </div>
      </div>
    </div>
  );
}
