"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./LandingPage.module.scss";
import { useGSAP } from "@gsap/react";

const preloadImages = async () => {
    const frameCount = 179;
    const baseUrl = "/image_sequence/"; // Replace with the actual base URL
    const loadSingleImage = (index: number) =>
        new Promise((resolve) => {
            const img = new Image();
            img.src = `${baseUrl}${(index + 1).toString().padStart(3, "")}.webp`;
            img.onload = () => resolve(img);
        });
    await Promise.all(Array.from({ length: frameCount }, (_, i) => loadSingleImage(i)));
    return true;
};

function LandingPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const frameCount = 180;
    const playhead = useRef({ frame: frameCount - 1 });
    const [imageLoaded, setImageLoaded] = useState(false);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        preloadImages().then(() => setImageLoaded(true));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderFrame = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const frameIndex = Math.max(Math.floor(playhead.current.frame), 0);
        const frameNumber = frameIndex.toString().padStart(3, "");
        const imageUrl = `/image_sequence/${frameNumber}.webp`;
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height); // Clear the previous frame
            context.drawImage(image, 0, 0, canvas.width, canvas.height); // Ensure image covers entire canvas
        };
    };

    useEffect(() => {
        if (!imageLoaded) return;

        const updatePlayhead = () => {
            playhead.current.frame -= 0.3;
            if (playhead.current.frame < 0) {
                playhead.current.frame = 0;
            }
        };

        const render = () => {
            if (playhead.current.frame <= 0) {
                playhead.current.frame = 0;
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
            end: "+=100%",
            scrub: true,
            onUpdate: (self) => {
                playhead.current.frame = self.progress * (frameCount - 1);
                renderFrame();
            },
        });
    });

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.canvasWrapper}>
            <div className={styles.canvasTarget}>
                <canvas ref={canvasRef} id="image-sequence" className={styles.canvas} width={2500} height={1355} />
            </div>
        </div>
    );
}

export default LandingPage;
