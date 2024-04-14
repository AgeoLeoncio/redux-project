import { AppBar, Toolbar, Typography } from "@mui/material";


export const Navbar = () => {
    

    return (
        <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1}}>
                        Programando en React Redux
                    </Typography>
                </Toolbar>
        </AppBar>
    );
}
