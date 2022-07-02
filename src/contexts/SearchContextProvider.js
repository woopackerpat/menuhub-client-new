import axios from '../config/axios'
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const SearchContext = createContext();

function SearchContextProvider({ children }) {
    const [refId, setRefId] = useState()
    const [data, setData] = useState()
    const [page, setPage] = useState()
    const [search, setSearch] = useState()

    const naviagate = useNavigate()
    const location = useLocation()

    const fetchData = async () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('search')
            // const query = 'burger'
            const res = await axios.post('restaurant/search', { search: query })
            setData(res.data)
            console.log(res.data)
        } catch {
            console.log('fetchData error')
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
        setSearch(input.name)
        naviagate(`../search?search=${input.name}`)
    }

    return (
        <SearchContext.Provider value={{ fetchData, parseData, inputSearch , data, page, refId, location}}>
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