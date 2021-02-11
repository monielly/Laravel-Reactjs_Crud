import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppContainer from './AppContainer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const color = {
  textDecoration: 'none'
}

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <AppContainer
      title="Material UI"
    >
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary">
          <Link style={color} to="/">
            Link Back
          </Link>
        </Button>  
      </div>
    </AppContainer>
  );
}