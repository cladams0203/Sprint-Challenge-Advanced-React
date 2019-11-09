import React, { useEffect } from 'react'
import { PlayerCard } from './PlayerCard';
import { useForm } from '../hooks/useForm'
import { useSearch } from '../hooks/useSearch';
import { CardContainer, Form } from '../styled/styled';

export function PlayerContainer (props) {
    
    const [value, handleChange] = useForm({
        name: "name",
        search: ""
    })

    const [search, setSearch] = useSearch(props.players, value.name)
    useEffect(() => {
        setSearch(value.search)
    }, [value])
    
    console.log(search)
    return(
        <CardContainer>
            <Form>
            <select name='name' onChange={handleChange}>
                <option value='name'>Name</option>
                <option value='country'>Country</option>
            </select>
            <input 
                onChange={handleChange}
                value={value.search}
                name='search'
                type='text'
                placeholder='Search for Players'
            />  
        </Form>
            {search && search.map((item, index) => {
                return (
                    <PlayerCard player={item} key={index} />
                )
            })}
        </CardContainer>
    )
}