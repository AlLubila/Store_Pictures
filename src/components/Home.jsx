import React, { useState } from 'react'

import styles from '../components/Home.module.css'

export default function Home({setIsPopupVisible}) {

  const [selectedFile, setSelectedFile] = useState(null);

  const allowedImageTypes = ['image/jpeg', 'image/png'];

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    const typeofFile = event.target.files[0].type
    if (allowedImageTypes.includes(typeofFile)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null)
      alert('Unsupported file type. Please select a JPEG or PNG image.')
    }

  };

  const handleCancel = () => {
    setSelectedFile(null)
  }

  const handleStore = () => {
    if (selectedFile !== null) {
      setIsPopupVisible(true)
    }
    
  }

  return (
    <div>
       <h1 className={styles.myh1}>STORE YOUR UNFORGEATABLE PICS <br />FREE YOUR PHONE'S SPACE</h1>
      <main className={styles.main}>
        <div className="left">
          <p className={styles.p}>Take a pic from your device to store:</p>
          <input type="file" className={styles.input} onChange={handleFileChange}/>
          <div className={selectedFile? styles.frameAfter : styles.frameBefore}>
            {
              selectedFile ? (
                <img src={URL.createObjectURL(selectedFile)} alt="the selected pic" className={styles.previewImage}/>
              ) :
              (
                <p>No file selected</p>
              )
            }
            
           
          </div>
          <button className={styles.storeBtn} onClick={handleStore}>TO STORE</button>
          <button className={styles.cancelBtn} onClick={handleCancel}>CANCEL</button>
        </div>
        <div className={styles.right}>
          <select>
            <option value="">Stored Pictures</option>
          </select>
        </div>
      </main>
    </div>
  )
}
