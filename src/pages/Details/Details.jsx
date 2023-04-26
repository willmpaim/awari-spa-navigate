import { Link, useParams } from "react-router-dom";
import usersList from "../../data";

function Details() {

    const params = useParams();
    const Targetid = params.id

    const userDetails = usersList.find((user) => {
        return user.id === Targetid;

    });
    return (
        <div>
            <h1>{userDetails.name}</h1>
            <p>{userDetails.description}</p>
            <img src={userDetails.image.src} alt={userDetails.image.alt} />
            <Link to="/">Voltar</Link>
        </div>

    )
};



export default Details;
