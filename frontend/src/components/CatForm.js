import { useState } from 'react';
import { useCatsContext } from '../hook/useCatsContext';

const CatForm = () => {
    const { dispatch } = useCatsContext();

    const [breed, setBreed] = useState('');
    const [origin, setOrigin] = useState('');
    const [pattern, setPattern] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const cat = {breed, origin, pattern}

        const response = await fetch('/cats', {
            method: 'POST',
            body: JSON.stringify(cat),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok) {
            setBreed('')
            setOrigin('')
            setPattern('')
            setError(null)
            setEmptyFields([])
            console.log('Mew Cat Added', json)
            dispatch({type: 'CREATE_CAT', payload: json})
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Cat</h3>

            <label>Cat Breed: </label>
            <input
            type="text"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
            className = {emptyFields.includes('breed') ? 'error': ''} 
            />

            <label>Origin: </label>
            <input
            type="text"
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
            className = {emptyFields.includes('origin') ? 'error': ''} 
            />

            <label>Pattern: </label>
            <input
            type="text"
            onChange={(e) => setPattern(e.target.value)}
            value={pattern}
            className = {emptyFields.includes('pattern') ? 'error': ''} 
            />

            <button>Add Cat</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default CatForm