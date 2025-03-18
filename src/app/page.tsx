import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 >
          Keep on keepin on 
        </h1>
        <div>
          Welcome to my world, won&apos;t you come on in?
        </div>
      </main>
    </div>
  );
}
