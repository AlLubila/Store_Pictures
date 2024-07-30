import React from "react";
import styles from '../components/Pop.module.css'

export default function Pop({setIsPopupVisible}) {

  const handleCancel = ()=> {
      setIsPopupVisible(false)
  }

  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <p className={styles.p}>Classified the photo by: (i.e: Tags, Years, Events, Places, etc)</p>
        <div>
          <input type="text" className={styles.input} />
          <button className={styles.enterBtn}>Enter</button>
          <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
