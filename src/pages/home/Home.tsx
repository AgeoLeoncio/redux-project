import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import { People } from "../../data/people";

export interface HomeInterface{

}
/**Instalamos el datagrid para hacer uso en este componente de npm install @mui/x-data-grid */

export const Home:React.FC<HomeInterface> = () => {

    const pageSize = 5;
    //columnas que va utilizar el datagrid
    const columns = [
        {
            field:'name',
            headerName:'Name',
            flex:1,
            minWidth:150,
            renderCell:(params: GridRenderCellParams) => <>{params.value}</>//+ params.row.name
        },
        {
            field:'category',
            headerName:'Categories',
            flex:1,
            renderCell:(params: GridRenderCellParams) => <>{params.value}</>//+ params.row.name
        },
        {
            field:'company',
            headerName:'Companies',
            flex:1,
            renderCell:(params: GridRenderCellParams) => <>{params.value}</>//+ params.row.name
        }
    ]

    return (
        <DataGrid
                rows={People}
                columns={columns}
                disableColumnSelector
                disableRowSelectionOnClick
                autoHeight
                getRowId={(row:any )=> row.id}
                initialState={{
                    pagination:{
                        paginationModel:{
                            pageSize:5,
                            page:0,
                        },
                    },
                }}
                pageSizeOptions={[5,10,15,20]}
                >
                
        </DataGrid>
    )
}
