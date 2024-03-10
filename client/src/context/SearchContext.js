import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    city: JSON.parse(localStorage.getItem('search')).city || undefined,
    dates: JSON.parse(localStorage.getItem('search')).dates || [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch(action.type) {
        case "NEW_SEARCH":
          return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state
    }
}

//Search contexr provider
export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    
    useEffect(() => {
        localStorage.setItem('search', JSON.stringify({
            city: state.city,
            dates: state.dates,
            options: state.options
        }))
    }, [state])

    return (
        <SearchContext.Provider
         value={{
             city: state.city,
             dates: state.dates,
             options: state.options,
             dispatch 
        }}
        >
            {children}
        </SearchContext.Provider>
    );
}