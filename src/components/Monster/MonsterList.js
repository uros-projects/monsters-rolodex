import React from 'react';
import Monster from './Monster';

const MonsterList = ({ monsters }) => {
    const styles = {
        width: '85vw',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, auto))',
        gridGap: '20px'
    }

    return (
        <div style={styles}>
            {monsters.map( monster => <Monster key={monster.id} monster={monster} /> )}
        </div>
    )
}

export default MonsterList
