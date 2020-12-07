const Grocery = ({name, count, complete, id, toggle}) =>{
    const handleClick = () =>{
        toggle(id);
    }
    
    return (
        <li
            style={
                complete ?{
                    ...styles.item,
                    ...styles.complete,
                }
                : styles.item
            }
        >
        {name}  <input type="checkbox" onClick={handleClick} checked={complete}/>
        <br/ > quantity: {count}
        <br />   
        <br />       
        </li>
    );
};

const styles = {
    item: {
        cursor: "pointer",
    },
    complete: {
        color: "grey",
        textDecoration: "line-through",
    },
};

export default Grocery;