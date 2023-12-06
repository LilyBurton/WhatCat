import { CatsContext } from "../context/CatContext";
import {useContext } from 'react';

export const useCatsContext = () => {
    const context = useContext(CatsContext)

    if (!context) {
        throw Error('useCatsContext must be used inside an CatsContextProvider')
    }

    return context
}