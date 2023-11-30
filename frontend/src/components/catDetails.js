const CatDetails = ({ cat }) => {
    return (
        <div className="cat-details">
            <h3>{cat.breed}</h3>
            <p><strong>Origin: </strong>{cat.origin}</p>
            <p><strong>Pattern: </strong>{cat.pattern}</p>
            <p>{cat.createdAt}</p>
        </div>
    )
}

export default CatDetails