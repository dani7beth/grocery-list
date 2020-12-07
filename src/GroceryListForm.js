import {useState} from 'react';

const GroceryListForm = (props) => {
    const [itemName, setItemName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addGrocery(itemName);
        setItemName("");
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="enter grocery item"
            onChange={(e) =>{
                setItemName(e.target.value);
            }}
            value={itemName}
            />
        </form>
    </div>
    );
};
export default GroceryListForm;