import { useCallback, useMemo } from "react";
import "./List.css";

function List({ usersList , onItemClick }) {

    const handleClick = useCallback((user)=>{
        onItemClick && onItemClick(user);
    },[onItemClick]);

    const listMap = useMemo(()=>{
        return usersList.map((user) => {
            return (
                <li key={user.id}>
                    <p className="name">{user.name}</p>
                    <button className="button" onClick={() => handleClick(user)}>ver detalhes</button>
                </li>
            )
        });

    }, [handleClick, usersList]);

    return (
        <div className="list">
            {listMap}
        </div> 
    )

}

export default List;

