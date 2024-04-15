import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "../../data/people";
import { Person } from "../../models/Person";
import { useState } from "react";
import { Checkbox } from "@mui/material";
export interface HomeInterface{

}

/**Instalamos el datagrid para hacer uso en este componente de npm install @mui/x-data-grid */
export const Home: React.FC<HomeInterface> = () => {

    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
    const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

    //columnas que va utilizar el datagrid
    const handleChange = (person: Person) => {
        setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person]);
    };

    /**En la columna del checkbox, indicamos que encontramos una persona que  */
    const columns:GridColDef[] = [
        {
            field: 'actions',
            type: 'actions',
            headerName: '',
            sortable: false,
            width: 50,
            renderCell: (params: GridRenderCellParams) => <>{<Checkbox
                size="small"
                checked={findPerson(params.row)}
                onChange={() => handleChange(params.row)}>
            </Checkbox>}</>
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

    return (
        <DataGrid
            rows={People}
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
};
