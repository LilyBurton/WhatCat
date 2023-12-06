import { useEffect } from 'react';
import { useCatsContext } from '../hook/useCatsContext';
import CatDetails from '../components/catDetails';
import CatForm from '../components/CatForm';


const Cats = () => {
    const {cats, dispatch} = useCatsContext()

    useEffect(() => {
        const fetchCats = async ()=> {
            const response = await fetch('/cats')
            const json = await response.json()

            if(response.ok) {
               dispatch({type: 'SET_CATS', payload: json}) 
            }
        }

        fetchCats()
    }, [])
    return (
        <div className="cats">
            <div className="cat-types">
                {cats && cats.map((cat) => (
                    <CatDetails key = {cat._id} cat={cat}/> 
                ))}
            </div>
            <CatForm />
        </div>
    )
}
export default Cats