import { useParams } from "react-router-dom";

function Produto() {
const {id} = useParams();

    return (
        <div>
            <h2>Meu produto é:</h2>
            <span>O meu produto é {id}</span>
        </div>
    );
}

export default Produto;