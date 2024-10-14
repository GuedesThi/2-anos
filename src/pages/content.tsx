import styles from "../styles/content.module.css";

export default function Content() {
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
          Sim, você é o amor da vida de Thiago
          <br></br>
          dos Santos Guedes
        </p>

        <p className={styles.secondText}>
          Pode acessar nossos dados, bom passeio!
        </p>
      </div>
    </div>
  );
}
