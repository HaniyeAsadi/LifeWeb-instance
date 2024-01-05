import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chart from '../../components/Chart/Chart'
import { Typography, Grid } from '@mui/material';
import './Homepage.css';

const HomePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div 
      className='container'
    >
      <Grid container spacing={2}>
        <Grid item md={7}>
          <Typography 
            variant='h3'
            className='title'
          >
            Browser Market Shares
          </Typography>
          <Typography 
            variant='h5'
          >
            Browser market share refers to the distribution of internet users among various web browsers, indicating the popularity of each browser in the online landscape. It plays a crucial role in web development and digital marketing strategies, influencing how websites are designed and optimized. The market share is often determined by analyzing data from analytics services, browser vendors, and independent research firms. Leading browsers such as Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, and Opera continually compete for dominance. Understanding browser market share trends is essential for web developers to ensure compatibility and performance across different platforms, and it provides valuable insights for businesses aiming to optimize their online presence for the broadest audience.
          </Typography>
          <Typography
            variant='h5'
          >
           There is a comparison between browsers and among its different versions. 
            <Button 
              onClick={handleOpen}
              style={{fontWeight: 'bold'}}
            >
              Click here to show the chart.
            </Button>
          </Typography>
        </Grid>
        <Grid item md={5}>
          <img
            className="homepage-image"
            src="/Homepage.jpeg"
            alt="browser share markets"
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Chart />
      </Modal>
      
    </div>
  )
};

export default HomePage;
