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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop:"5%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const ListView = (props) => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListViewItem />
       </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
export default ListView;

