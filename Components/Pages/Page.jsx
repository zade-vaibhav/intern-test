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
                <p  className={styles.pathTopHeadding}><span>VMS </span>/ Cameras / Camera Details</p>
                <p className={styles.pathTopHeadding_mid}>Bank Entrance-front-view Camera1</p>
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
            <Button sx={{margin:1}} variant="outlined">Edit Camera</Button>
            <Button sx={{margin:1}} variant="outlined">Deactive</Button>
            <Button sx={{margin:1}} variant="outlined" color="error">
              Error
            </Button>
          </div>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.cameraButtons}>
              <Button sx={{margin:1}}  variant="contained" startIcon={<CameraAltIcon />}>
                View Recorded Videos
              </Button>
              <Button sx={{margin:1}} variant="contained" startIcon={<FlipCameraAndroidIcon />}>
                Refetch Camera
              </Button>
            </div>

            <div className={styles.descreptionSection}>
              <div className={styles.image}>
              <Image alt='aaa' width={600} height={336.69} src="/Group 49.png"></Image>
              </div>
              <div className={styles.imageDescription}>
                <div className={styles.descTop}>
                  <p className={styles.discTop_left}>Camera Details</p>
                  <Button variant="outlined" color="success">Active</Button>
                </div>
                <div className={styles.descBottom}>
                  <p><strong className={styles.Strong}>Location</strong>: Coimbatore</p>
                  <p><strong className={styles.Strong}>City</strong>: Coimbatore</p>
                  <p><strong className={styles.Strong}>TimeZone</strong>: Delhi-India</p>
                  <p><strong className={styles.Strong}>Date added</strong>: Aug 03, 2023 12:01:42 PM</p>
                  <p><strong className={styles.Strong}>Last update</strong>: Aug 03, 2023 12:01:42 PM</p>
                  <p><strong className={styles.Strong}>Manufacture details</strong>: ADT</p>
                  <p><strong className={styles.Strong}>RTSP/HLS URL</strong>: Link</p>
                  
                </div>
              </div>
            </div>

            <div className={styles.cameraHealth}>
                 <h3>Camera Health and Alert</h3> 
                 <div className={styles.healthDesc_Section}>
                  <div className={styles.Alert}>
                    <div className={styles.alertData}>
                      <h4>Offline Alert</h4>
                      <p>If camera is continuously offline for</p>
                      <h3>12 minutes</h3>
                      <p>Send an email to</p>
                      <p>email.com</p>
                    </div>
                  </div>
                  <div className={styles.Alert}>
                  <div className={styles.alertData}>
                      <h4>Health Grade</h4>
                      <h1>96%</h1>
                      <p>Cheers, this camera had no offline time in the last 30 days</p>
                      <p className={styles.alertData_p}>Grage A</p>
                    </div>
                  </div>
                  <div className={styles.Alert}>
                  <div className={styles.alertData}>
                    <h4>Health Logs</h4>
                    <p>Today, 04:37 pm: Activated</p>
                    <p>23 Aug, 02:22 pm: Deactivated</p>
                    <p>21 Aug, 05:12 am: Activated</p>
                    <p>20 Aug, 02:12 am: Deactivated</p>
                    <p>19 Aug, 02:12 am: Deactivated</p>
                  </div>
                  </div>
                 </div>
            </div>

            <div className={styles.recordingSection}>
                <div className={styles.recordingHeadding}>
                  <h1>Recent Recordings</h1>
                  <a>view all</a>
                </div>
                <div className={styles.recordings}>
                  <div className={styles.videoCard}>
                   <div className={styles.videoImage}>
                   <Image alt='aaa' width={230} height={167.69} src="/video 1.png"></Image>
                   <div>
                    <h3>Recording_0121</h3>
                    <p>Today, 04:42 pm</p>
                   </div>
                   </div>
                  </div>
                  <div className={styles.videoCard}>
                  <Image alt='aaa' width={230} height={167.69} src="/video 2.png"></Image>
                  <h3>Recording_0121</h3>
                    <p>Today, 04:42 pm</p>
                  </div>
                  
                  <div className={styles.videoCard}>
                  <Image alt='aaa' width={230} height={167.69} src="/video 3.png"></Image>
                  <h3>Recording_0121</h3>
                    <p>Today, 04:42 pm</p>
                  </div>
                  
                  <div className={styles.videoCard}>
                  <Image alt='aaa' width={230} height={167.69} src="/video 4.png"></Image> 
                  <h3>Recording_0121</h3>
                    <p>Today, 04:42 pm</p>
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
