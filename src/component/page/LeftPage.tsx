import React from 'react';
import { useParams } from 'react-router';

import makeStyles from '@material-ui/core/styles/makeStyles';
import ToolBar from '@material-ui/core/Toolbar';

import MiniCalendar from 'component/lefts/helper/MiniCalendar';

const useStyles = makeStyles({
    miniCalendar: {


    },
    conponentStyle: {
        backgroundColor: 'blue'
    }
})

const LeftPage: React.FC = () => {
    const classes = useStyles();
    const {id} = useParams<{id: string|undefined}>();
    const urlMonth = parseInt(id);
    return(
        <MiniCalendar year={2020} month={urlMonth}/>
    );
}

export default LeftPage;