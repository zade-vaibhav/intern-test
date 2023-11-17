import React from "react";
import Button from "@mui/material/Button";
import styles from "./page.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pagesContainer}>
        <div className={styles.headder}>
          <div className={styles.headderLeft}>
            <div className={styles.navigationButton}>
              <div className={styles.navContainer}>
                <ArrowBackIcon />
              </div>
            </div>
            <div className={styles.headderPath}>
              <div className={styles.pathTop}>
                <p  className={styles.pathTopHeadding}>VMS / Cameras / Camera Details</p>
                <p className={styles.pathTopHeadding}>Bank Entrance-front-view Camera1</p>
              </div>
              <div className={styles.pathBottom}>
                <p className={styles.pathTopHeadding}>
                  View and manage camera details, recordings and connection
                  details
                </p>
              </div>
            </div>
          </div>
          <div className={styles.headderRight}>
            <Button variant="outlined">Edit Camera</Button>
            <Button variant="outlined">Deactive</Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </div>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.cameraButtons}>
              <Button variant="contained" startIcon={<CameraAltIcon />}>
                View Recorded Videos
              </Button>
              <Button variant="contained" startIcon={<FlipCameraAndroidIcon />}>
                Refetch Camera
              </Button>
            </div>

            <div className={styles.descreptionSection}>
              <div className={styles.image}>
              <Image alt='aaa' width={600} height={336.69} src="/Group 49.png"></Image>
              </div>
              <div className={styles.imageDescription}>
                <div className={styles.descTop}>
                  <p>Camera Details</p>
                  <Button variant="outlined">Deactive</Button>
                </div>
                <div className={styles.descBottom}>
                  <p>Location: india</p>
                  <p>Location: india</p>
                  <p>Location: india</p>
                  <p>Location: india</p>
                  <p>Location: india</p>
                  <p>Location: india</p>
                </div>
              </div>
            </div>

            <div className={styles.cameraHealth}>
                 <h3>Camera Health and Alert</h3> 
                 <div className={styles.healthDesc_Section}>
                  <div className={styles.Alert}>dldldl</div>
                  <div className={styles.Alert}>f,ff,</div>
                  <div className={styles.Alert}>dfmfmfm</div>
                 </div>
            </div>

            <div className={styles.recordingSection}>
                <div className={styles.recordingHeadding}>
                  <h1>Recent Recordings</h1>
                  <a>view all</a>
                </div>
                <div className={styles.recordings}>
                  <div className={styles.videoCard}>
                    video 
                  </div>
                  <div className={styles.videoCard}>
                    video 
                  </div>
                  <div className={styles.videoCard}>
                    video 
                  </div>
                  <div className={styles.videoCard}>
                    video 
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
