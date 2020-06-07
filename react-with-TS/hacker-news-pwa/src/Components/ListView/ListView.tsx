import React from 'react';
import { NewsType } from '../News/News';
import { createStyles } from "@material-ui/core/styles";
import AppTheme from '../../theme';
import { Paper, List, ListItem, Typography, Divider } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { PersonOutlined, Schedule } from "@material-ui/icons";

const styles = ({ palette } = AppTheme) => createStyles({
    root: {
        width: "100%",
        backgroundColor: palette.background.paper
    },
    listItemContainer: {
        display: "flex",
        flexDirection: 'column',
        flex: '1 1 168px'
    },
    listItemAvatar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 100px',
        fontWeight: 'bold'
    },
    listItemPoints: {
        color: palette.primary.main,
        fontSize: '1.7em',
    },
    listItemHeader: {
        fontSize: '1.3em',
        fontWeight: 'lighter',
        color: 'inherit',
        textDecoration: 'none'
    },
    newsMetaData: {
        display: 'flex',
        fontSize: '0.9em'
    },
    icon: {
        fontSize: '1.2rem'
    }
});

interface Props extends WithStyles<typeof styles> {
    newsData: NewsType[],
}
const ListView = ({ newsData, classes }: Props ) => {
    return (
        <Paper style={{ marginTop: "1%" }} elevation={3}>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                {(newsData?.length <= 0) ? <h1>No Data!!</h1>:
                    newsData.map((listItem : NewsType, index : number) => {
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
                                                <span className={classes.newsMetaData} style={{ marginRight: "10px" }}>
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

export default withStyles(styles)(ListView);