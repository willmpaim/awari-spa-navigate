import { Link, useParams } from "react-router-dom";
import usersList from "../../data";
import "./Details.css"

function Details() {

    const params = useParams();
    const Targetid = params.id

    const userDetails = usersList.find((user) => {
        return user.id === Targetid;

    });
    return (
        <div className="details" >
            <h1>{userDetails.name}</h1>
            <p className="description">{userDetails.description}</p>
            <img className="image" src={userDetails.image.src} alt={userDetails.image.alt} />
            <Link to="/">Voltar</Link>
        </div>

    )
};



export default Details;
