import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListViewItem from './ListViewItem/ListViewItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExposurePlus1 from "@material-ui/icons/ExposurePlus1";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

import withLoader from "../LoadingHOC/Loader";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const ListView = (props) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        <ListViewItem />
       </ListItem>
      <Divider />
      <ListItem  divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem >
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem >
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
export default withLoader(ListView);

