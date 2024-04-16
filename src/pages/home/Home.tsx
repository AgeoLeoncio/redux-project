import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "../../data/people";
import { Person } from "../../models/Person";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../redux/states/favorites";
import { addPeople } from "../../redux/states/people";
import { AppStore, store } from "../../redux/store";
export interface HomeInterface{

}

/**Instalamos el datagrid para hacer uso en este componente de npm install @mui/x-data-grid */
export const Home: React.FC<HomeInterface> = () => {

    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
    const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);
    const dispatch = useDispatch();
    const people = useSelector((state:AppStore) =>state.people);

    //columnas que va utilizar el datagrid
    const handleChange = (person: Person) => {
        const filteredPeopple = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
        dispatch(addFavorite(filteredPeopple));
        setSelectedPeople(filteredPeopple);
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
    useEffect(()=>{
        dispatch(addPeople(People));
    },[])

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
