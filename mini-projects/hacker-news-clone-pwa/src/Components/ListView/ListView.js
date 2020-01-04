import React ,{ useMemo, useEffect }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListViewItem from './ListViewItem/ListViewItem';
import withLoader from "../LoadingHOC/Loader";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// const coreSelector = createSelector((state => {
//   debugger;
//   console.log(state.CoreReducer);
//   return state.CoreReducer;
// } ), shallowEqual);
const ListView = (props) => {
  const classes = useStyles();
  const {listData} = props;
  console.log("listData" , listData);
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem>
        {
          <ListViewItem/>
        } 
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
export default withLoader(ListView);

