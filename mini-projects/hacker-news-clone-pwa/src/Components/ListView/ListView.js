import React ,{ useMemo, useEffect }  from 'react';
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import withLoader from "../LoadingHOC/Loader";
import Typography from "@material-ui/core/Typography";
import { Person, Schedule } from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listItemContainer: {
    display: "flex",
    flexDirection:'column',
    flex : '1 1 168px'
  },
  listItemAvatar : {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex : '0 1 100px',
    fontWeight : 'bold'
  },
  listItemPoints: {
    color: theme.palette.primary.main,
    fontSize : '1.7em',
  },
  listItemHeader:{
    fontSize:'1.8em',
    fontWeight:'bold'
  }
}));

const ListView = (props) => {
  const classes = useStyles();
  const {listData, currentPageNo} = props;
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {
        listData.map( (listItem , index) => {
          return (
            <div key={`news-item-${index}`}>
              <ListItem alignItems="flex-start">
                <div className={classes.listItemAvatar}>
                  <div className={classes.listItemPoints}>
                    {listItem.points}
                  </div>
                  <div>Points</div>
                </div>
                <div className={classes.listItemContainer}>
                  <Typography
                    component="div"
                    className={classes.listItemHeader}
                  >
                    {listItem.title}
                  </Typography>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <span style={{ display: "flex" }}>
                      <Person /> &nbsp;{listItem.user}
                    </span>
                    <span style={{ display: "flex", marginLeft: "3%" }}>
                      <Schedule /> &nbsp; {listItem.time_ago}
                    </span>
                  </div>
                </div>
                {/* <ListItemText
                  primary={listItem.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {listItem.user}
                      </Typography>
                      - {listItem.time_ago}
                    </React.Fragment>
                  }
                /> */}
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

