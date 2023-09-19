import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        backgroundColor: theme.palette.custom.main,
        color: theme.palette.background.default

    }
}));
export default function ConfirmDialog() {

    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const [confirmFuncs, setConfirmFuncs] = useState({
        confirm: handleClose
    })
    const [btnName, setBtnName] = useState({
        cancel: 'CANCEL',
        confirm: 'OK'
    })
    const openFunc = (c, f, btn) => {
        setContent(c)
        setOpen(true)
        setBtnName(btn ? btn : { cancel: 'CANCEL', confirm: 'OK' })
        setConfirmFuncs({
            confirm: f ? f : null
        })
    }
    const [level, setLevel] = useState("Info")

    useEffect(() => {
        window.confirm = (c, f, btn) => {
            setLevel("Info")
            openFunc(c, f, btn)
        }
        window.confirmWarning = (c, f, btn) => {
            setLevel("Warning")
            openFunc(c, f, btn)
        }
    }, [])


    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title" className={classes.title}>{level} </DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-description" variant="h4" color={level == "Warning" ? "red" : "custom"} sx={{
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                }}>

                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="grey" variant="contained">
                    {btnName.cancel}
                </Button>
                <Button
                    onClick={() => {
                        handleClose()
                        if (confirmFuncs.confirm) {
                            confirmFuncs.confirm()
                        }
                    }} color="custom" variant="contained" autoFocus>
                    {btnName.confirm}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

