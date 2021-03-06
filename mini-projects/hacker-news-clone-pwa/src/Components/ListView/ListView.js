import React ,{ useMemo, useEffect }  from 'react';
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import withLoader from "../LoadingHOC/Loader";
import Typography from "@material-ui/core/Typography";
import { PersonOutlined, Schedule } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";


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
    fontSize:'1.3em',
    fontWeight:'light',
    color:'inherit',
    textDecoration:'none'
  },
  newsMetaData:{
    display:'flex',
    fontSize:'0.9em'
  },
  icon:{
    fontSize:'1.2rem'
  }
}));

const ListView = (props) => {
  const classes = useStyles();
  const {listData, currentPageNo} = props;
  return (
    <Paper style={{ marginTop: "1%" }} elevation={3}>
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
                    <Typography component="div">
                      <a
                        className={classes.listItemHeader}
                        href={listItem.url ? listItem.url : ""}
                        target="_blank"
                      >
                        {listItem.title}
                      </a>
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {listItem.user ? (
                        <span className={classes.newsMetaData} style={{ marginRight: "10px"}}>
                          <PersonOutlined className={classes.icon} /> &nbsp;{listItem.user}
                        </span>
                      ) : null}
                      {listItem.time_ago ? (
                        <span className={classes.newsMetaData}>
                          <Schedule className={classes.icon} /> &nbsp;{listItem.time_ago}
                        </span>
                      ) : null}
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
    </Paper>
  );
}
export default withLoader(ListView);

