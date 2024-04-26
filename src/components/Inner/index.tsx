import React from 'react'
import styles from './Inner.module.scss'
import { motion } from 'framer-motion'
import { background, perspactive, slide } from './anime'
import { useRouter } from 'next/router'

function Inner({ children }: { children: React.ReactNode }) {

    const router = useRouter()

    const anime = (variants: any) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants
        }
    }

    return (
        <motion.div {...anime(background)} className={styles.inner}>
            <motion.div {...anime(slide(router.route))} className={styles.slide}></motion.div>
            <motion.div className={styles.perspactive} {...anime(perspactive)}>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Inner