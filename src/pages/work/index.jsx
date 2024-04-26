"use client";
import React from "react";
import Inner from "../../components/Inner";
import { motion } from "framer-motion";
import styles from "./WorkPage.module.scss";
function Work() {
  return (
    <Inner>
      <div className={styles.work}>
        <h1 className={styles.title}>Work</h1>
      </div>
    </Inner>
  );
}

export default Work;
