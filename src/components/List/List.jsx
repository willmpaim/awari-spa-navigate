import { useCallback, useMemo } from "react";

function List({ usersList , onItemClick }) {

    const handleClick = useCallback((user)=>{
        onItemClick && onItemClick(user);
    },[onItemClick]);

    const listMap = useMemo(()=>{
        return usersList.map((user) => {
            return (
                <li key={user.id}>
                    <p onClick={() => handleClick(user)}>{user.name}</p>
                </li>
            )
        });

    }, [handleClick, usersList]);

    return (
        <div>
             {usersList.length > 0 ? (
            <ul>{listMap}</ul>
        ): (
            <p>não há usuario</p>
        )}
        </div> 
    )

}

export default List;

