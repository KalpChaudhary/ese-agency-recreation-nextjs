"use client";
import { useEffect } from "react";
import Inner from "../../components/Inner";
import { motion } from "framer-motion";
import styles from "./WorkPage.module.scss";
import { usePathname } from "next/navigation";
function Work() {
  const pathname = usePathname();

  //store session data
  useEffect(() => {
    sessionStorage.setItem("prevRoute", pathname);
    console.log(sessionStorage.getItem("prevRoute"))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Inner>
      <div className={styles.work}>
        <h1 className={styles.title}>Work</h1>
      </div>
    </Inner>
  );
}

export default Work;
