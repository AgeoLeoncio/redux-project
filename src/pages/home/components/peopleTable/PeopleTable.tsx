import { Checkbox } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "../../../../models/Person";
import { addFavorite } from "../../../../redux/states/favorites";
import { AppStore } from "../../../../redux/store";

export interface PeopleTableInterface {

}

/**Instalamos el datagrid para hacer uso en este componente de npm install @mui/x-data-grid */
export const PeopleTable: React.FC<PeopleTableInterface> = () => {

    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const dispatch = useDispatch();
    const people = useSelector((store: AppStore) => store.people);
    // const favorite = useSelector((state: AppStore) => state.favorites);
    const favorite = useSelector((store: AppStore) => store.favorites);
    
    const findPerson = (person: Person) => !!favorite.find(p => p.id === person.id);//devuelve un booleano
    const filterPerson = (person: Person) => favorite.filter(p => p.id !== person.id);

    //columnas que va utilizar el datagrid
    const handleChange = (person: Person) => {
        const filteredPeopple = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
        dispatch(addFavorite(filteredPeopple));
        setSelectedPeople(filteredPeopple);
    };


    /**En la columna del checkbox, indicamos que encontramos una persona que  */
    const columns: GridColDef[] = [
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
    useEffect(() => {
        setSelectedPeople(favorite);
    }, [favorite])

    return (
        <DataGrid
            rows={people}
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
