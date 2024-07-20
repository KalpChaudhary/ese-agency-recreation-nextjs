"use client";
import React, { useState } from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { textReveal, logoReveal, NavItemHover } from "./anime"
import ModelComponent from '@/components/ModelComponent';
import { useRouter } from 'next/router';
import Link from 'next/link';



function Header() {


    const [isModelActive, setIsModelActive] = useState(false)

    const menuItems = [
        { name: 'Home', modelActive: false },
        { name: 'Work', modelActive: false },
        { name: 'Expertise', modelActive: true },
        { name: 'Agency', modelActive: false },
        { name: 'Jobs', modelActive: false },
        { name: 'Contact', modelActive: false }
    ];

    return (
        <>
            <div className={styles.header} style={{
                borderBottom: isModelActive ? "1px solid #464648" : "none"
            }} >
                <div className={styles.logoWrapper}>
                    <motion.div variants={logoReveal} onAnimationComplete={() => console.log("anime completed")} initial="inital" animate="enter" className={styles.logo}>
                        <span >xyz agency</span>
                    </motion.div>
                </div>
                <div className={styles.nav}>
                    <motion.div variants={textReveal} initial="initial" animate="enter" className={styles.navList}>
                        {
                            menuItems.map((item, index) => (
                                <NavItem
                                    key={index}
                                    label={item.name}
                                    onHover={() => setIsModelActive(item.modelActive)}
                                    hover={NavItemHover}
                                />
                            ))
                        }
                    </motion.div>
                </div>
            </div >
            <ModelComponent setIsModelActive={setIsModelActive} isModelActive={isModelActive} />
        </>
    )
}

export default Header

//refractored version of NavItem component
const NavItem = ({ label, onHover, hover }: { label: string, onHover: any, hover: object }) => {
    const router = useRouter();
    return (
        <motion.div className={styles.navItem} onMouseEnter={onHover} variants={textReveal} whileHover={hover}>
            <div onClick={() => router.push(`/${label.toLocaleLowerCase() === "home" ? "" : label.toLocaleLowerCase()}`)}>
                <span>{label}</span>
                <span>{label}</span>
            </div>

            {/* TODO: Add arrow down icon if navitem is Expertise  */}
            {/* {
                label === "Expertise" && (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.708" height="7.274" viewBox="0 0 6.708 7.274">
                            <path d="M4.092,6.969,6.708,4.353,6,3.646l-2.147,2.1V0h-1V5.793L.707,3.647,0,4.354,2.616,6.969a1.045,1.045,0,0,0,1.476,0" fill="currentColor"></path>
                        </svg>
                    </div>
                )} */}
        </motion.div>
    );


}