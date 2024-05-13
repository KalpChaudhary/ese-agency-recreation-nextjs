import React, { use, useState } from 'react'
import styles from './Slider.module.scss'
import Image from 'next/image'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { animateTransform } from './anime';

gsap.registerPlugin(ScrollTrigger);

function Slider() {

    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [prevActiveIndex, setPrevActiveIndex] = useState(0);
    const sliderListRef = useRef(null);
    const isInView = useInView(containerRef);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });



    useEffect(() => {
        console.log("Scroll Progress:", scrollYProgress.get());
        const unsubscribe = scrollYProgress.onChange(value => {
            // updateSlideTransforms(value);
            setScrollProgress(value);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Determine which item should be in view based on scroll progress
    const activeIndex = Math.min(Math.floor(scrollProgress * 5), 4); // Clamp the value to max index 4

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
        </div>
    )
}

export default Slider


