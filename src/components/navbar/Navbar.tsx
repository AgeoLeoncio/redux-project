import { AppBar, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { FavoriteTable } from "./favoriteTable/FavoriteTable";
import { CustomDialog, dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";


export interface NavbarInterface{

}

export const Navbar:React.FC<NavbarInterface> = () => {

    const stateFavorites = useSelector((store:AppStore) => store.favorites);
        
    const handleClick = ()=>{
        dialogOpenSubject$.setSubject = true;
    }

    return (
        <>
        <CustomDialog>
            <FavoriteTable></FavoriteTable>
        </CustomDialog>
        <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1}}>
                        Programando en React Redux
                    </Typography>
                    <IconButton color="warning" aria-label="favorites" component='label' onClick={handleClick}>
                        <FavoriteIcon/>
                    </IconButton>
                </Toolbar>
        </AppBar>
        </>
    );
}
