import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

import './url-container.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      height: '110px',
      overflow: 'auto',
    },
    chip: {
      borderRadius: '4px',
      margin: theme.spacing(0.2),
    },
  }));


  const UrlContainer = ({urlType, urls = [], onUrlDelete = () => {}}) => {
    const classes = useStyles();

    const chipList = urls.map((url, index) => ({
        key: index,
        label: url,
    }));
  
    const handleDelete = (label) => {
        onUrlDelete(urlType, label);
    };
  
    return (
        <div className="form-row container">
            <div className="col-3 title">
                <label className="col-sm-12 col-form-label">{urlType}</label>
            </div>
            <div className="col-9">
                <Paper variant="outlined" square  component="ul" className={classes.root}>
                    {chipList.map((data) => {
                    return (
                        <li key={data.key}>
                        <Chip
                            size = 'small'
                            label={data.label}
                            onDelete={() => handleDelete(data.label)}
                            className={classes.chip}
                        />
                        </li>
                    );
                    })}
                </Paper>
            </div>
        </div>
    );
  };

export default UrlContainer;