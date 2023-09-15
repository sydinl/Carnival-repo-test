import * as React from 'react';
// import Backdrop from '@mui/material';
// import { CircularProgress } from '@mui/material';
                
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';  


export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(false)
    const [count, setCount] = React.useState({
        n: 0
    })
    const handleClose = () => {
        count.n--
        setCount({ ...count })
        setOpen(count.n > 0)
    };
    const handleOpen = () => {
        count.n++
        setCount({ ...count })
        setOpen(count.n > 0)
    };
    React.useEffect(() => {
        window.startProgress = () => {
            handleOpen()
        }
        window.stopProgress = () => {
            handleClose()
        }
    }, [])
    return (
        <div>
            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 200, backgroundColor: "transparent" }}
                open={open}
            >
                <CircularProgress size={80}/>
            </Backdrop>
        </div>
    );
}