import { useState } from 'react';

export function useSearch(data, type) {
    const [search, setSearch] = useState({
        searching: '',
    })
    
    const setSearching = (input) => {
        setSearch({...search, searching: input})
    }

    const found = data && data.filter((item) => {
        return item[`${type}`].toLowerCase().includes(search.searching)
    })
      
    return [found, setSearching]
}