import { useCallback } from "react";
import List from "../../components/List";
import usersList from "../../data";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const onItemClick = useCallback((user) => {
        navigate(`/details/${user.id}`);

    }, [navigate]);

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <List usersList={usersList} onItemClick={onItemClick}/>
        </div>
    )

};


export default Home;