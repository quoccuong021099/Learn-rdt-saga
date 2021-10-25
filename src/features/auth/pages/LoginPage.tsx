import { Box, Button, CircularProgress, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { authActions } from "../authSlice"
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: "center",
        minHeight: "100vh"
    },
    box: {
        padding: '24px',
    }
}))

export default function LoginPage() {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const isLogging = useAppSelector(state => state.auth.logging)

    const handleLoginClick = () => {
        dispatch(authActions.login({
            username: '',
            password: ''
        }))
    }

    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">
                    Student Management
                </Typography>
                <Box mt={4}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
                        {isLogging && <CircularProgress size={20} color='secondary' />} &nbsp; Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}
