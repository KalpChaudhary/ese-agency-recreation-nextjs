"use client";
import styles from './TitleSlide.module.scss'
import { motion } from 'framer-motion'
import { textReveal, titleAnimation } from './anime'
import ParallaxText from '../ParallaxText';

function TitleSlide() {


    return (
        <>
            <div className={styles.titleWrapper} >
                <motion.div variants={textReveal} initial="initial" animate="enter" className={styles.subtitle}>
                    <motion.span variants={textReveal}>modern</motion.span>
                    <motion.span variants={textReveal}>highquality</motion.span >
                    <motion.span variants={textReveal}>fresh</motion.span >
                </motion.div>
                <motion.div variants={titleAnimation} initial="initial" animate="animate" className={styles.title}>
                    <ParallaxText baseVelocity={-4}>Overtake time with us</ParallaxText>
                </motion.div>
            </div >
        </>
    )
}

export default TitleSlide