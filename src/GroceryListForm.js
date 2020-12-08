import {useState} from 'react';

const GroceryListForm = (props) => {
    const [itemName, setItemName] = useState("");
    const [itemCount, setItemCount] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addGrocery(itemName, itemCount);
        setItemName("");
        setItemCount();
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Item: 
            <input 
            placeholder="enter grocery item"
            onChange={(e) =>{
                setItemName(e.target.value);
            }}
            value={itemName}
            />
            </label>
            <label>
                Quantity:
            <input 
            placeholder="2"
            type="number"
            value={itemCount}
            onChange={(e)=>{
                setItemCount(e.target.value);
            }}
            />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
    );
};
export default GroceryListForm;