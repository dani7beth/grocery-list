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
    <div class="form">
        <form onSubmit={handleSubmit}>
            <div class="form-group">
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
            </div>
            <br />
            <div class="form-group">
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
            <br />
            <input class="btn btn-success" type="submit" value="Submit" />
            </div>
        </form>
    </div>
    );
};
export default GroceryListForm;