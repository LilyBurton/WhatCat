import { useEffect, useState } from 'react';
import CatDetails from '../components/catDetails';


const Cats = () => {
    const [cats, setCats] = useState(null)

    useEffect(() => {
        const fetchCats = async ()=> {
            const response = await fetch('/cats')
            const json = await response.json()

            if(response.ok) {
                setCats(json)
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
        </div>
    )
}
export default Cats