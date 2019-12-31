import React from 'react'; 
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent : 'center'
    
  }
}));
const withLoader =  WrappedComponent => ( props ) => {
    const {isLoading} = props;
      const classes = useStyles();

  return isLoading === false ? (
    <WrappedComponent {...props} />
  ) : (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default withLoader;