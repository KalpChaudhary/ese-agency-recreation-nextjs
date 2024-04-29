"use client"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import styles from "./LandingPage.module.scss"
import { useGSAP } from "@gsap/react";

const preloadImages = async () => {

    const frameCount = 49;
    const baseUrl = "/images/ese-hero-sequence"; // Replace with the actual base URL
    const loadSingleImage = (index: number) =>
        new Promise(resolve => {
            const img = new Image();
            img.src = `${baseUrl}${(index + 1).toString().padStart(2, '0')}.webp`;
            img.onload = () => resolve(img);
        });
    Array.from({ length: frameCount }, (_, i) => loadSingleImage(i));
    return true
};

function LandingPage() {


    const canvasRef = useRef(null)
    const frameCount = 49;
    const playhead = useRef({ frame: 0 });
    const [imageLoaded, setImageLoaded] = useState(false);





    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        preloadImages()
        setImageLoaded(true)
    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    const renderFrame = () => {
        const canvas = canvasRef.current;
        // @ts-ignore
        const context = canvas.getContext("2d");
        const frameIndex = Math.min(Math.floor(playhead.current.frame) + 1, frameCount - 1);
        const frameNumber = frameIndex.toString().padStart(2, '0');
        const imageUrl = `/images/ese-hero-sequence${frameNumber}.webp`;
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            context.drawImage(image, 0, 0);
        };
    };

    useEffect(() => {
        if (!imageLoaded) return;


        //updating the playhead to the next frame in the sequence
        const updatePlayhead = () => {
            playhead.current.frame += 0.25;
            // play one loop of the sequence
            if (playhead.current.frame > frameCount) {
                return
            }
        };

        const render = () => {
            if (playhead.current.frame >= frameCount - 1) {
                // Stop the animation at the last frame
                playhead.current.frame = frameCount - 1;
            } else {
                renderFrame();
                updatePlayhead();
                requestAnimationFrame(render);
            }
        };

        render();

    }, [imageLoaded]);


    // ScrollTrigger for controlling the frame index
    useGSAP(() => {
        ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                playhead.current.frame = (1 - self.progress) * (frameCount - 1);
                renderFrame();
            }
        });

    })


    return (
        <div className={styles.canvasWrapper}>
            <div className={styles.canvasTarget}>
                <canvas ref={canvasRef} id="image-sequence" className={styles.canvas} width={2500} height={1355} />
            </div>
        </div>
    )
}

export default LandingPage


