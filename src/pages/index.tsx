import { FormEvent } from "react";
import styles from "../styles/index.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const nextPage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/confirmation");
  };

  return (
    <div className={styles.bg}>
      <div className={styles.attencionContainer}>
        <div className={styles.icon}>🚨</div>
        <div>
          <h1 className={styles.h1}>ATENÇÃO</h1>
        </div>
        <div className={styles.icon}>🚨</div>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.firstText}>
          Por questões legais e de segurança🔐, só
          <br></br>
          permitimos acesso ao conteúdo se você for
          <br></br>o <strong>amor da vida</strong> de alguém❤
        </p>

        <p className={styles.secondText}>
          Para saber se você é, informe alguns
          <br></br>
          dados📝 abaixo:
        </p>
      </div>

      <form className={styles.form} onSubmit={nextPage}>
        <h2 className={styles.h2}>
          QUESTIONÁRIO DO
          <br></br>
          AMOR
        </h2>

        <div className={styles.question}>
          <label className={styles.label}>Meu Nome</label>
          <input
            className={styles.input}
            type="text"
            required
            placeholder="Nome completo..."
          />
        </div>
        <div className={styles.question}>
          <label className={styles.label}>
            Nome de quem me considera <strong>amor da vida</strong>
          </label>
          <input
            className={styles.input}
            type="text"
            required
            placeholder="Nome completo..."
          />
        </div>
        <div className={styles.question}>
          <label className={styles.label}>Data de namoro de vocês</label>
          <input
            className={styles.input}
            type="text"
            required
            placeholder="Dia/Mês (00/00)"
          />
        </div>

        <button className={styles.button} type="submit">
          <p className={styles.iconHurt}>❤</p>
        </button>
      </form>
    </div>
  );
}
