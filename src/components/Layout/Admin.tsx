import { Box, makeStyles } from '@material-ui/core';
import { Header, Sidebar } from 'components/common';
import Dashboard from 'features/dashboard';
import StudentFeature from 'features/students';
import * as React from 'react';
import { Route, Switch } from 'react-router';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        gridArea: "header",
    },
    sidebar: {
        backgroundColor: theme.palette.background.paper,
        gridArea: "sidebar",
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    main: {
        backgroundColor: theme.palette.background.paper,
        gridArea: "main",
        padding: theme.spacing(2, 3)
    }
}))

export interface AdminLayoutProps {
}

export function AdminLayout(props: AdminLayoutProps) {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.header}><Header /></Box>
            <Box className={classes.sidebar}><Sidebar /></Box>
            <Box className={classes.main}>
                <Switch>
                    <Route path="/admin/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/admin/students">
                        <StudentFeature />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}
