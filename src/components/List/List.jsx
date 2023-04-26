import { useCallback, useMemo } from "react";

function List({ usersList , onItemClick }) {

    const handleClick = useCallback((user)=>{
        onItemClick && onItemClick(user);
    },[onItemClick]);

    const listMap = useMemo(()=>{
        return usersList.map((user) => {
            return (
                <li key={user.id}>
                    <p>{user.name}</p>
                    <button onClick={() => handleClick(user)}>ver detalhes</button>
                </li>
            )
        });

    }, [handleClick, usersList]);

    return (
        <div>
            <ul>{listMap}</ul>
        </div> 
    )

}

export default List;

