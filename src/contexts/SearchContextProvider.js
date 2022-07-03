import axios from '../config/axios'
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const SearchContext = createContext();

function SearchContextProvider({ children }) {
    const [refId, setRefId] = useState()
    const [data, setData] = useState()
    const [page, setPage] = useState()
    const [search, setSearch] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const naviagate = useNavigate()
    const location = useLocation()

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('search')
            // const query = 'burger'
            const res = await axios.post('restaurant/search', { search: query })
            setData(res.data)
            console.log(res.data)
        } catch {
            console.log('fetchData error')
        } finally {
            setIsLoading(false)
        }
    }

    const parseData = async () => {
        try {
            if (data.lenght != 0) {
                setPage(data)
                setRefId(data[0].id)
            }
        } catch {
            console.log('parseData error')
        }
    }

    const inputSearch = (input) => {
        if (input.length > 0) {
            setSearch(input.name)
            naviagate(`../search?search=${input.name}`)
        }
        setSearch(input)
        naviagate(`../search?search=${input}`)
    }

    return (
        <SearchContext.Provider value={{ fetchData, parseData, inputSearch , data, page, refId, location, isLoading}}>
            {children}
        </SearchContext.Provider>
    )
};

const useSearch = () => {
    const ctx = useContext(SearchContext)
    return ctx
};

export default SearchContextProvider;

export { useSearch };