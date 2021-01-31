const Monster = ({ monster }) => {
    const styles = {
        container: {
            display: 'block',            
            backgroundColor: '#95dada',
            border: '1px solid grey',
            borderRadius: '5px',
            padding: '25px',
            cursor: 'pointer',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            transition: 'transform 0.25s ease-out'
        },
        img: {
            maxWidth: '180px',
            textAlign: 'center'
        }
    }    
    
    return (
        <div style={styles.container}>
            <img style={styles.img} alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h1> {monster.name} </h1>
            <p> {monster.email} </p>          
        </div>
    )
}

export default Monster
