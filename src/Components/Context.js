import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

// const Api_Url = "http://www.omdbapi.com/?i=tt3896198&apikey=368eb47";
 export const Api_Url = "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json";
// const Api_Url = ${process.env.REACT_API_KEY}

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("Titanic")
    const [error, setError] = useState({ show: "false", msg: "" })
    const getMovies = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            if (data.status === "ok") {
                setIsLoading(false)
                setMovie(data.data)
            } else {
                setError({
                    show: true,
                    msg: data.error
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMovies(`${Api_Url}`);
    },[]);
    return <AppContext.Provider value={{ isLoading, movie, error, query, setQuery }}>{children}</AppContext.Provider>
}

// we make a global custom hook
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }