import React, { useState, useEffect } from 'react';
import MonsterList from './MonsterList';
import SearchBox from './SearchBox';

const MonsterMain = () => {
    const [monsters, setMonsters] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users))
    }, [])

    const handleSearchChange = e => {        
        setSearchField(e.target.value)
    }

    // IMPORTANT: 
    // This works automagically because each time a state value changes
    // the component gets re-rendered, and all the code executes again!
    // That way we don't need to keep filteredMonsters in a state variable, 
    // and it can be a const, since the value is set once on each render, 
    // so there is no re-assignment of a constant!
    // Avoiding additional state is good practice for optimization
    const filteredMonsters = monsters.filter( monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    const styles = {
        heading: {
            fontFamily: 'Bigelow Rules',
            fontSize: '72px',
            color: '#0ccac4'
        },
        monster: {           
            paddingBottom: '60px'
        }
    }

    return (
        <div style={styles.monster}>
            <h1 style={styles.heading}> Monsters Rolodex </h1>
            <SearchBox
                handleSearchChange={handleSearchChange}
                placeholder='Search monster'
            />

            <MonsterList monsters={filteredMonsters} />
        </div> 
    )
}

export default MonsterMain
