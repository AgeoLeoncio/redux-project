import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { People } from "../../../data/people";
import { addPeople } from "../../../redux/states/people";
import { PeopleTable } from "./peopleTable/PeopleTable";
export interface HomeInterface {

}

/**Instalamos el datagrid para hacer uso en este componente de npm install @mui/x-data-grid */
export const Home: React.FC<HomeInterface> = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(addPeople(People));
    }, [])

    return (
        <PeopleTable></PeopleTable>
    );
};
