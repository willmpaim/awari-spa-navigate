import {Link} from 'react-router-dom';

function Error() {

    return (
        <>
        <p>Pagina não encontrada</p>
        <button>
            <Link to="/">Voltar</Link>
        </button>
        </>
    )
};

export default Error;