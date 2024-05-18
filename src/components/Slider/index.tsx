import { useState } from 'react'
import styles from './Slider.module.scss'
import Image from 'next/image'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function Slider() {

    const containerRef = useRef(null);
    const progressBarListRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [prevActiveIndex, setPrevActiveIndex] = useState(0);
    const sliderListRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(value => {
            // updateSlideTransforms(value);
            setScrollProgress(value);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);


    // Determine which item should be in view based on scroll progress
    // Clamp the value to max index 4
    const activeIndex = Math.min(Math.floor(scrollProgress * 5), 4);

    // update previous active index when active index changes
    useEffect(() => {
        if (activeIndex !== prevActiveIndex) {
            setPrevActiveIndex(activeIndex);
        }
    }, [activeIndex, prevActiveIndex]);


    // Generate variants for motion.div that depend on whether the index is the active index
    const generateVariants = (index: number) => {

        const isPast = index < activeIndex;
        return {
            hidden: {
                translateY: isPast ? "-100%" : "100%",
                transition: {
                    ease: [0.79, 0.14, 0.15, 0.86],
                    duration: 1,
                },
            },
            visible: {
                translateY: "0%",
                transition: {
                    ease: [0.79, 0.14, 0.15, 0.86],
                    duration: 1,
                },
            },
            initial: { translateY: '100%' }
        };
    };


    useEffect(() => {
        const progressBarList = progressBarListRef.current;
        const sliderContainer = containerRef.current;

        ScrollTrigger.create({
            trigger: sliderContainer,
            start: 'top top',
            end: 'bottom bottom',
            onEnter: () => {
                gsap.to(progressBarList, {
                    position: 'fixed',
                    top: '83.5%',
                    duration: 0

                });
            },
            onLeaveBack: () => {
                gsap.to(progressBarList, {
                    position: 'absolute',
                    top: '12%',
                    duration: 0
                });
            },
            onLeave: () => {
                gsap.to(progressBarList, {
                    position: 'absolute',
                    top: '97.6%',
                    duration: 0
                });
            },
            onEnterBack: () => {
                gsap.to(progressBarList, {
                    position: 'fixed',
                    top: '83.5%',
                    duration: 0
                });
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const calculateProgressForSlider = (index: number) => {
        const sectionStart = index / 5;
        const sectionEnd = (index + 1) / 5;
        const progressInSection = (scrollProgress - sectionStart) / (sectionEnd - sectionStart);
        return Math.max(0, Math.min(1, progressInSection)); // Clamp between 0 and 1
    };


    return (

        <div ref={containerRef} className={styles.sliderContainer}>
            <div className={styles.stickyContainer}>
                <div ref={sliderListRef} className={styles.sliderList}>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <motion.div initial="initial"
                            animate={index === activeIndex ? "visible" : "hidden"}
                            variants={generateVariants(index)} key={index} className={styles.slider}>
                            <h1>Item {item}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div ref={progressBarListRef} className={styles.progressBarList}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className={`${styles.progressBarWrapper}`}>
                        <div
                            className={`${styles.progressBar} ${index === activeIndex ? styles.active : ""}`}
                            style={{
                                width: `${calculateProgressForSlider(index) * 100}%`
                            }}
                        ></div>
                    </div>
                ))}
            </div>
        </div >

    )
}
export default Slider


