import { useCatsContext } from "../hook/useCatsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CatDetails = ({ cat }) => {
    const { dispatch } = useCatsContext()

    const handleClick = async () => {
        const response = await fetch('/cats/' + cat._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CAT', payload: json})
        }
    }
    return (
        <div className="cat-details">
            <h3>{cat.breed}</h3>
            <p><strong>Origin: </strong>{cat.origin}</p>
            <p><strong>Pattern: </strong>{cat.pattern}</p>
            <p>{formatDistanceToNow(new Date(cat.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default CatDetails