
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ModelComponent.module.scss';
import Image from 'next/image';
import { contentReveal, modelReveal } from './anime';


function ModelComponent({ setIsModelActive, isModelActive }: { setIsModelActive: React.Dispatch<React.SetStateAction<boolean>>, isModelActive: boolean }) {
    return (
        <motion.div onMouseLeave={() => setIsModelActive(false)} variants={modelReveal(isModelActive)} initial="initial" animate="enter" className={styles.model}>

            {/* container for adding space at the top */}
            <div className={styles.container_border}></div>
            {/* container text content */}
            <motion.div variants={contentReveal(isModelActive)} initial="initial" animate="enter" className={styles.textContainer}>
                <span>Our Expertise</span>
                <ul>
                    <motion.li variants={contentReveal(isModelActive)}>Websites</motion.li>
                    <motion.li variants={contentReveal(isModelActive)}>Content Marketing</motion.li>
                    <motion.li variants={contentReveal(isModelActive)}>Branding</motion.li>
                    <motion.li variants={contentReveal(isModelActive)}> Campaigning</motion.li >
                    <motion.li variants={contentReveal(isModelActive)}>Strategy</motion.li>
                </ul >
            </motion.div >
            {/* container for image */}
            <motion.div variants={contentReveal(isModelActive)} initial="initial" animate="enter" className={styles.imageContainer} >
                <Image src="/images/model_img_1.png"
                    alt="model image"
                    layout="fill"
                    objectFit="contain"
                    // quality={100}
                    loading='lazy'
                />
            </motion.div >
        </motion.div >


    );
}
export default ModelComponent