import './App.css';
import React from 'react';
import smera from "./smera.svg";
import smera2 from "./logo.png";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

type Position = {
  x: number,
  y: number,
  index: number,
  squareSide: number,
  rotation?: number
};


type ImageData = {
  width: number,
  height: number,
  rows: number,
  columns: number,
  squareSide: number
}

type MyState = {
  imageData: ImageData;
  imageUrl: string,
  shuffledPos: Array<Position>;
  rotatedPos?: Array<Position>;
  hardMode: boolean,
  gameStarted: boolean;
  imageError: boolean;
  positions: Array<Position>,
  scaleView: number
  gameWon: boolean,
  selectedImageType: string,
  correctMoves: number,
  showRules: boolean,
  dialogOpen: boolean
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'lightsalmon',
    color: 'white'
  },
  title: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    right: '5px'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore 
  return <Slide direction="up" ref={ref} {...props} />;
});



const App = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openDialog = (value) => {
    setDialogOpen(value);
  }

  const handleClose = () => {
    setDialogOpen(false);
  }

  return (
    <div className="App">
      <div style={{ background: 'lightsalmon' }} className="app-container">
        <div className='container'>
          <div className="wave">
            <img src={smera} alt="logo" className='logo' />
            <img src={smera2} alt="logo" className='logo' />

            <div className="button-container">
            </div>
          </div>
        </div>
        <div className='mid-section' style={{ paddingLeft: '20px' }}>
          <div><span style={{fontSize: '20px'}}>Not looking good?</span>  Can you build this website with your skills?</div>
        </div>
        <div className='container bottom'>
          <div className="wave bottom">
            <div className="button-container bottom">
              <span><a style={{ color: 'white', textDecoration: 'none' }} href="mailto:tukuna.patro@smera.io?subject=Suggestions">Have any suggestions?</a></span>
              <div>
              <span style={{color: 'white', cursor: 'pointer'}} onClick={() => openDialog(true)}>Learn more about Smera</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
 // @ts-ignore */}
      <Dialog fullWidth open={dialogOpen} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
             Smera Technologies Pvt. Ltd.
            </Typography>
            <Button autoFocus color="inherit" className={classes.button} onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Learn Web Development" secondary="Build Projects" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="JavaScript, HTML, CSS, Web standards, UI Frameworks, Web standards, Ruby on Rails" secondary="SCM, TDD, Agile" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default App;
