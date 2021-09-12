import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: "#BC2C3D",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  heading:{
    margin:100
  },
  bottom: {
    position: 'fixed',
    zIndex: '7 !important',
    right: '0px',
    bottom: '0px',
    top: '0px',
    left: '0px',
    background:"red"
  }
  ,
  gadfrE: {
    height: '6.5rem',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    background: 'rgb(255, 255, 255)',
    left: '0px',
    padding: '1rem',
    boxShadow: 'rgb(0 0 0 / 10%) 0px -1px 20px',
    zIndex: '1000',
    borderRadius: '0px 0px 0.6rem 0.6rem',
},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddOnScreenDialog(props) {
  
  const [value, setValue] = React.useState('female');
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    console.log("Check event",event.target.value);
    setSelectedValue(event.target.value);
  };
  const classes = useStyles();
  let initialState=props.data;
  
  const prepareAddonItems=()=>{
    return (<div><h3>I am in variant</h3></div>)

  }
  const prepareExtraItems=(data)=>{
   return (
   
    data.map((obj,i)=>( <div> <Grid
      container
      direction="row"
      display="flex"
     
    >
      <Grid xs={12} sm={6} >
      <h5>{obj.addon_name}</h5>
      </Grid>
      
      <Grid item justify="flex-end"  sm={6}  md={6} container>
      <h6>{obj.price}</h6>
      <Radio
    checked={selectedValue === obj.addon_name}
    onChange={handleChange}
    value={obj.addon_name}
    
    name="radio-button-demo"
    
    inputProps={{ 'aria-label': 'B' }}
  />
      </Grid>
      
      
      </Grid></div>))
   
   );
  
  }
 
  
  
  return (
    <div >
      
      <Dialog fullScreen open={props.open} onClose={props.close} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.close} aria-label="close">
              <CloseIcon />
            </IconButton>
           
           
          </Toolbar>
        </AppBar>
        <h2>SELECT CUSTOMIZATIONS</h2>
        
        {props.data?.addon_items?.map((obj, i) => (
          
    Array.isArray(obj.categories)?obj.categories.map((objCategories,j)=>
    (
      
      objCategories.type==='SNG'?
      <div>
        {/* <h4>Size</h4>

        <h6>Please select any one of option</h6> */}
        {
          Array.isArray(objCategories.addons)?prepareExtraItems(objCategories.addons):prepareAddonItems()
         
        }
        
        </div>:<div><h3>Not Found</h3></div>
    )):<h3>Exit</h3>
        ))}
    <div style={{bottom:'0px',position:'absolute',height:'50px',width:'100%'}}>
    <Grid
      container
      direction="row"
      display="flex"
      style={useStyles.gadfrE}
      
    >

      <Grid sm={4}  md={1} container style={{marginLeft:'20px',backgroundColor:'red',justifyContent:'center',marginRight:'20px',borderRadius:'10px'}}>
        <h6>Welcome</h6>
        </Grid>

        <Grid  md={10} style={{backgroundColor:'yellow',marginLeft:'5px',marginBottom:'10px',borderRadius:'10px',justifyContent:'center'}} spacing={0}
>
          <h6 style={{justifyContent:'center'}}>India</h6>
          </Grid>
      </Grid>



    </div>
      </Dialog>
      
    </div>
  );
}