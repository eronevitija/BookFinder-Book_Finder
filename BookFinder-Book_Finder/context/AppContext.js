import { createContext, useContext } from "react";
import { useState } from "react";


const AppContext = createContext(null);

export const useAppContext = ()=> {
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error('Appcontext must be within appContextProvider')
    }
    return context;
}

const AppContextProvider = ({children}) => {

     const [bookmark, setBookmark] = useState([]);

      const addToBookmark = (id) =>{
        if(!bookmark.includes(id))
        setBookmark(bookmark.concat(id));
        console.log(id)
    }

    const removeFromBookmark= (id) => {
        const index = bookmark.indexOf(id);
        console.log(index);
        const temp = [...bookmark.slice(0,index),...bookmark.slice(index+1)]
        setBookmark(temp);
    }

return(
    <AppContext.Provider value={{bookmark, addToBookmark, removeFromBookmark}}>
        {children}
    </AppContext.Provider>
)
}


export default AppContextProvider;


