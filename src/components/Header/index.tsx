"use client";
import React, { useState } from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { modelReveal, textReveal, logoReveal, NavItemHover } from "./anime"


function Header() {

    const [isModelActive, setIsModelActive] = useState(false)

    const menuItems = [
        { name: 'Home', modelActive: false },
        { name: 'Work', modelActive: false },
        { name: 'Expertise', modelActive: true }, // Note the corrected spelling of 'Expertise'
        { name: 'Agency', modelActive: false },
        { name: 'Jobs', modelActive: false },
        { name: 'Contact', modelActive: false }
    ];



    return (
        <>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <motion.div variants={logoReveal} initial="inital" animate="enter" className={styles.logo}>
                        <span >ese agency</span>
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
            <motion.div onMouseLeave={() => setIsModelActive(false)} variants={modelReveal(isModelActive)} initial="initial" animate="enter" className={styles.headerModel}>
            </motion.div>
        </>
    )
}

//refractored version of NavItem component
const NavItem = ({ label, onHover, hover }: { label: string, onHover: any, hover: object }) => (
    <motion.div onMouseEnter={onHover} variants={textReveal} whileHover={hover}>
        <span>{label}</span>
        <span>{label}</span>
    </motion.div>
);

export default Header