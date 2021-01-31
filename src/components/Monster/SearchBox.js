const SearchBox = ({ handleSearchChange, placeholder }) => {
    const styles = {
        container: {
            border: 'none',
            outline: 'none',
            padding: '10px',
            width: '150px',
            lineHeight: '30px',
            marginBottom: '30px',
            marginTop: '30px'
        }
    }

    return (
        <input
            style={styles.container}
            type='search'
            placeholder={placeholder}
            onChange={handleSearchChange}
        />
    )
}

export default SearchBox
