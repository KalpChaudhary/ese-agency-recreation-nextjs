import React from 'react'
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>ese agency</div>
            <div className={styles.nav}>
                <ul className={styles.navList}>
                    <li><span>Home</span></li>
                    <li><span>Work</span></li>
                    <li><span>Expertice</span> </li>
                    <li><span>Agency</span></li>
                    <li><span>Jobs</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Header