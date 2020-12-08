const Grocery = ({name, count, complete, id, toggle, edit}) =>{
    console.log(count);

    const handleClick = () =>{
        toggle(id);
    }

    const editName = () =>{
        name = prompt('Enter the edited name: ');
        count = prompt("Enter the new count: ");
        edit(id, name, count);
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
        <button onClick={editName}>edit me</button>
        <br />  
        <br/ >
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