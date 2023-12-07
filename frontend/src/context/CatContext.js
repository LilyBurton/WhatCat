import { createContext, useReducer } from 'react'

export const CatsContext = createContext()

export const catsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATS':
            return {
                cats: action.payload
            }
        case 'CREATE_CAT':
            return {
                cats: [action.payload, ...state.cats]
            }
        case 'DELETE_CAT':
            return {
                cats: state.cats.filter((c) => c._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CatsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(catsReducer, {
        cats: null
    })
    return (
        <CatsContext.Provider value={{...state, dispatch}}>
            { children }
        </CatsContext.Provider>
    )
}
