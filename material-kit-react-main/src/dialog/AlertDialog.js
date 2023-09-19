import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    title: {
        backgroundColor: theme.palette.custom.main,
        color: theme.palette.background.default

    }
}));
export default function AlertDialog() {

    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
        if (callbackFunc.call) {
            callbackFunc.call()
        }
    }
    const classes = useStyles();
    const [callbackFunc, setCallback] = useState({
        call: null
    })
    const [level, setLevel] = useState("Error")
    const handleAlert = (v, callback) => {

        setContent(v)
        setOpen(true)
        callbackFunc.call = callback ? callback : null
        setCallback({ ...callbackFunc })
    }
    useEffect(() => {
        window.alert = (v, callback) => {

            handleAlert(v, callback)
            setLevel("Error")
        }
        window.alertInfo = (v, callback) => {
            handleAlert(v, callback)
            setLevel("Info")
        }
    }, [])
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title" className={classes.title}>
                {level}
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-description" color={level == "Error" ? "red" : "custom"} variant="h4" sx={{
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap'
                }}>
                    {/* <Typography variant="h4" color="red"> */}
                    {content}
                    {/* </Typography> */}
                </DialogContentText>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose} color="custom" variant="contained" autoFocus>
                    Close
          </Button>

            </DialogActions>
        </Dialog>
    );
}
