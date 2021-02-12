import React from 'react';
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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

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
  }
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

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
          <h2><span style={{ color: '#00aaff' }}>M</span>
              <span style={{ color: '#ff0000', marginRight: '45px' }}>W</span>
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
