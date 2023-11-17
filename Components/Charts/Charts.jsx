import React from 'react'
import Styles from "./charts.module.css"
import Button from '@mui/material/Button';
import Image from 'next/image'

const Charts = () => {
  return (
    <div className={Styles.chartContainer}>
      <div className={Styles.chart}>
        <div className={Styles.chartHeadding}>
            chart
        </div>
        <div className={Styles.chartData}>
          <div className={Styles.chartGraph}>
              <Image alt='aaa' width={190} height={190} src="/pppp.png"></Image>
          </div>
          <div className={Styles.chartDatas}>
             <div className={Styles.working_Camera}>
             <Image alt='aaa' width={24} height={24} src="/camera.png"></Image>
             <p>Totally 124 Cameras are in 9 NVRs and installed in 12 Locations</p>
             </div>
             <div className={Styles.nonworking_camera}>
             <Image alt='aaa' width={24} height={24} src="/typcn_info.png"></Image>
             <p>6 Cameras were experiencing downtime in Last 30 days</p>
             <Button variant="contained" color="error"> view camera</Button>
             </div>
             <div className={Styles.overall}>
              
              <div className={Styles.overAllPoints}>
                <div className={Styles.bulletsOne}></div>
                <p>Super Healthy (56)</p>
              </div>
              <div className={Styles.overAllPoints}>
                <div className={Styles.bulletsOne}></div>
                <p>Healthy (35)</p>
              </div>
              <div className={Styles.overAllPoints}>
                <div className={Styles.bulletsOne}></div>
                <p>Warning (27)</p>
              </div>
              <div className={Styles.overAllPoints}>
                <div className={Styles.bulletsOne}></div>
                <p>Danger (6)</p>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
