import { useRouter } from "next/router";
import styles from "../styles/confirmation.module.css";

export default function Confirmation() {
  const router = useRouter();

  const nextPage = () => {
    router.push("/content");
  };

  return (
    <div className={styles.bg}>
      <div className={styles.attencionContainer}>
        <div className={styles.icon}>✅</div>
        <div>
          <h1 className={styles.h1}>CONFIRMADO</h1>
        </div>
        <div className={styles.icon}>✅</div>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.firstText}>
          Sim, você é o amor da vida de Thiago dos
          <br></br>
          Santos Guedes
        </p>

        <p className={styles.secondText}>
          Pode acessar nossos dados, bom passeio!
        </p>

        <button className={styles.button} onClick={nextPage}>
          <p className={styles.bntText}>Acessar</p>
        </button>
      </div>
    </div>
  );
}
