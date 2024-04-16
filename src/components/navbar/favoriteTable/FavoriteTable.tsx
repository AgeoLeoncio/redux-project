import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "../../../models/Person";
import { removeFavorite } from "../../../redux/states/favorites";
import { AppStore } from "../../../redux/store";

interface FavoriteTableInterface{

}

export const FavoriteTable:React.FC<FavoriteTableInterface> = () => {

    const dispatch = useDispatch();
    const favoriteState = useSelector((store: AppStore) => store.favorites);

    //columnas que va utilizar el datagrid
    const handleClick = (person: Person) => {

        dispatch(removeFavorite(person));
        console.log("Eliminando la persona", person.id)
    };


    /**En la columna del checkbox, indicamos que encontramos una persona que  */
    const columns: GridColDef[] = [
        {
            field: 'actions',
            type: 'actions',
            headerName: '',
            sortable: false,
            width: 50,
            renderCell: (params: GridRenderCellParams) => <>{<IconButton
                color="warning" aria-label="favorites"
                component='label'
                onClick={() => handleClick(params.row)}>
                <Delete></Delete>
            </IconButton>}</>
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</> //+ params.row.name
        },
        {
            field: 'category',
            headerName: 'Categories',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</> //+ params.row.name
        },
        {
            field: 'company',
            headerName: 'Companies',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</> //+ params.row.name
        }
    ];
    console.log(favoriteState)

    return (
        <DataGrid
            rows={favoriteState}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
            autoHeight
            getRowId={(row: any) => row.id}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                        page: 0,
                    },
                },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
        >

        </DataGrid>
    );
}
