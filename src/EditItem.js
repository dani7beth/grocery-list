import {useState} from 'react';

const EditItem = (props) => {
    const [itemName, setItemName] = useState("");
    const [itemCount, setItemCount] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addGrocery(itemName, itemCount);
        setItemName("");
        setItemCount();
    };

    return (
    <div id="edit-form" style="display: none">
        <form onSubmit={handleSubmit}>
            <label>
                {itemName} 
            <input 
            placeholder="enter grocery item"
            onChange={(e) =>{
                setItemName(e.target.value);
            }}
            value={itemName}
            />
            </label>
            <label>
                {itemCount}
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
export default EditItem;