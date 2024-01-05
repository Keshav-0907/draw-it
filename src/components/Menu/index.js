import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import styles from './index.module.css'

const index = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}>
                <FaPencilAlt className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FaArrowRotateLeft className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FaArrowRotateRight className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FaArrowRotateRight className={styles.icon} />
            </div>
        </div>
    )
}

export default index