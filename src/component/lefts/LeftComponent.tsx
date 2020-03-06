import React from 'react';
import { useParams } from 'react-router';

import makeStyles from '@material-ui/core/styles/makeStyles';
import ToolBar from '@material-ui/core/Toolbar';

import MiniCalendar from 'component/lefts/MiniCalendar';

const useStyles = makeStyles({
    miniCalendar: {


    },
    conponentStyle: {
        backgroundColor: 'blue'
    }
})

const LeftComponent: React.FC = () => {
    const classes = useStyles();
    const {id} = useParams<{id: string|undefined}>();
    const urlMonth = parseInt(id);
    return(
        <ToolBar variant='dense'>
            <MiniCalendar year={2020} month={urlMonth}/>
        </ToolBar>
    );
}

export default LeftComponent;