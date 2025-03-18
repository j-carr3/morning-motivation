import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 >
          Welcome to my world, won&apos;t you come on in? 
        </h1>
        <div>
          Life is not about finding yourself. Life is about creating yourself.
        </div>
      </main>
    </div>
  );
}
