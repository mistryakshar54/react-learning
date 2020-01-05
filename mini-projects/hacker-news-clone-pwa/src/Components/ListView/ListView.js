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

const ListView = (props) => {
  const classes = useStyles();
  const {listData} = props;
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {
        listData.newslist.map( (newsItem , index) => {
          return (
            <div key={`news-item-${index}`}>
              <ListItem>
                <ListViewItem />
              </ListItem>
              <Divider />
            </div>
          );
        })
      }
    </List>
  );
}
export default withLoader(ListView);

