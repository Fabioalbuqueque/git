import Image from "next/image";
import Home from "./home/page";
import styles from "./page.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h}>Find GitHub</h1>
      <Home/>
    </main>
  );
}
