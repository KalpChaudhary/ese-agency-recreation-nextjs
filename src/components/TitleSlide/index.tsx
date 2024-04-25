"use client";
import React, { useRef } from 'react'
import styles from './TitleSlide.module.scss'
import { motion } from 'framer-motion'
import { titleAnimation } from './anime'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function TitleSlide() {
    const slider = useRef(null);
    const firstSlider = useRef(null);
    const secondSlider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    // Define a ref to keep track of the baseSpeed
    const baseSpeedRef = useRef(0.05);

    gsap.registerPlugin(useGSAP);

    //slider movement
    useGSAP(() => {
        // gsap code here...
        gsap.registerPlugin(ScrollTrigger);

        // gsap.to(slider.current, {

        //     x: "-500px"
        // })
        requestAnimationFrame(animate);
    }); // <-- scope is for selector text (optional)

    //slider movement
    const animate = () => {
        // Access the current speed from the ref
        const currentSpeed = baseSpeedRef.current;
        // console.log(currentSpeed)

        if (!firstSlider.current || !secondSlider.current) return;

        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstSlider.current, { xPercent: xPercent })
        gsap.set(secondSlider.current, { xPercent: xPercent })
        xPercent += currentSpeed * direction;
        requestAnimationFrame(animate);
    }
    return (
        <>

            <div className={styles.titleWrapper} >
                <div className={styles.subtitle}>
                    <span>modern</span>
                    <span>highquality</span>
                    <span>fresh</span>
                </div>
                <motion.div variants={titleAnimation} initial="initial" animate="animate" ref={slider} className={styles.title}>
                    <div ref={firstSlider} className={styles.slider}>
                        <motion.span variants={titleAnimation}>Overtake</motion.span>
                        <motion.span variants={titleAnimation}>time</motion.span>
                        <motion.span variants={titleAnimation}>with</motion.span>
                        <motion.span variants={titleAnimation}>us</motion.span>
                    </div>
                    <div ref={secondSlider} className={styles.slider}>
                        <motion.span variants={titleAnimation}>Overtake</motion.span>
                        <motion.span variants={titleAnimation}>time</motion.span>
                        <motion.span variants={titleAnimation}>with</motion.span>
                        <motion.span variants={titleAnimation}>us</motion.span>
                    </div>

                </motion.div>
            </div >
        </>
    )
}

export default TitleSlide