import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import { Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    background: '#001733',
    color: 'white'
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
}));

const custStyles = {
  test: {
    textDecoration: 'none',
    color: '#000000'
  },
  white: {
    color: '#ffffff'
  },
  side_background: {
    backgroundColor: '#001732'
  },
  child_background: {
    backgroundColor: '#002451',
    color: '#ffffff'
  },
  icon_color: {
    color: '#00ff7f'
  },
  nav_title: {
    color: '#ff1746'
  },
  textfield: {
    margin: 8,
    width: '400px'
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const cust = custStyles;
  //Sets Hamburger-menu to Open true or false
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  //FORM FIELDS
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fields = {
    title: title,
    description: description
  }

  const history = useHistory();

  const onSubmit = () => {

    axios.post('http://127.0.0.1:8000/api/submit', fields)
         .then(res =>{
           const result = res;
           console.log(result.data);

           swal({
            title: "Status: 200",
            text: "You have successfully added new Post!",
            icon: "success",
            timer: 2000,
            button: false
           })
           
           history.push('/');
         })
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
          [classes.paper]: true
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={cust.nav_title} noWrap>
            Laravel and Reactjs
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.paper]: true
          }),
        }}
      >
        <div className={classes.toolbar}>
          <h2><span style={{ color: '#00aaff' }}>L</span>
              <span style={{ color: '#ff0000', marginRight: '45px' }}>R</span>
          </h2>
          <IconButton style={cust.white} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? '' : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List style={cust.side_background}>
            {['Dashboard'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <DashboardIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
        <Link to="/" style={cust.test}>
          <List style={cust.side_background}>
            {['Home'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <HomeOutlinedIcon  style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
          </List>
        </Link> 
        <List style={cust.side_background}>
            {['Lorem ipsum'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <KeyboardCapslockIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
        <List style={cust.side_background}>
            {['Lorem ipsum'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <KeyboardCapslockIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
        <List style={cust.side_background}>
            {['Lorem ipsum'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <KeyboardCapslockIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
        <List style={cust.side_background}>
            {['Lorem ipsum'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <KeyboardCapslockIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
        <List style={cust.side_background}>
            {['Lorem ipsum'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <KeyboardCapslockIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
        <List style={cust.side_background}>
            {['Lorem ipsum'].map((text) => (
              <ListItem button key={text}>
                  <ListItemIcon>
                    <KeyboardCapslockIcon style={cust.icon_color} />
                  </ListItemIcon>
                <ListItemText style={cust.white} primary={text} />
              </ListItem>
            ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper style={{ padding: 16, backgroundColor: '#f5f5f5', color: '#ffffff', textAlign: 'center'}}>
          <Container >
            <Row>
              <Col>
                <TextField
                  label="Title"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  onChange={event => setTitle(event.target.value)}
                />
                <TextField
                  label="Description"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  onChange={event => setDescription(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={onSubmit}
                >
                    Test
                </Button>
              </Col>
            </Row>
          </Container>
        </Paper>
      </main>
    </div>
  );
}
