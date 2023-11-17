import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Styles from "./cards.module.css"
import Image from 'next/image';


const Cards = () => {
  return (
    <div className={Styles.Container}>
        <div className={Styles.card}>
        <Card  sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="250"
      image="/cctv.png"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      Bank Entrance-front-view Camera1
      </Typography>
      <Typography variant="body2" color="text.secondary">
      <Image className={Styles.cardContent} alt='aaa' width={16} height={16} src="/setting.png"></Image>
      3 Recipes Added
      </Typography>

      <Typography variant="body2" color="text.secondary">
      <Image className={Styles.cardContent} alt='aaa' width={16} height={16} src="/unidentified.png"></Image>
      today, 04:45pm: Unidentified face detected
      </Typography>

      <Typography variant="body2" color="text.secondary">
      <Image className={Styles.cardContent} alt='aaa' width={16} height={16} src="/location.png"></Image>
      Coimbatore branch
      </Typography>
    </CardContent>
    <CardActions className={Styles.actionButton}>
    <Button variant="contained" color="success">active</Button>
    <div>
    <Image className={Styles.cardContent} alt='aaa' width={24} height={24} src="/delete.png"></Image>
    <Image className={Styles.cardContent} alt='aaa' width={24} height={24} src="/record.png"></Image>
    <Image className={Styles.cardContent} alt='aaa' width={24} height={24} src="/level.png"></Image>
    </div>
    </CardActions>
  </Card>
  <Image className={Styles.detect} alt='aaa' width={80} height={80} src="/detect.png"></Image>
    </div>
        </div>

  
    
  )
}

export default Cards
