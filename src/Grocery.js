import Button from 'react-bootstrap/Button';
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
        <li class="list-group-item d-flex justify-content-between align-items-center "
            style={
                complete ?{
                    ...styles.item,
                    ...styles.complete,
                }
                : styles.item
            }
        >
        {name}  
        <br /> quantity: {count} 
        <Button class="btn btn-primary btn-sm" onClick={editName}>edit me</Button>
        <br />  
        <br />
        <br /> 
        <input type="checkbox" onClick={handleClick} checked={complete}/>     
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