import React from 'react';
import GroceryListForm from './GroceryListForm';
import List from './List';

class Groceries extends React.Component {
    //state to give some items for grocery list 
    //maybe implement a counter increase decrease quantity later
    state = {
        items: [
            {id: 1, name: "Orange", count: 2, complete: true},
            {id: 2, name: "Turkey", count: 1, complete: false},
            {id: 3, name: "Bread", count: 1, complete: true},
        ],
    };

    addGrocery = (itemName) => {
        console.log(itemName);
        const item = {
            id: Math.random(),
            name: itemName,
            count: Math.floor(Math.random() * (20 - 1) + 1),
        };

        this.setState({
            items: [...this.state.items, item],
        });
    };

    toggle = (id) => {
        let updateItems = this.state.items.map((t)=>{
            if(t.id !== id){
                return t;
            }
            return {...t, complete: !t.complete};
        });

        this.setState({
            items: updateItems,
        });
    };
    

    render () {
        return (
            <div>
                <h1>Grocery List</h1>
                <GroceryListForm addGrocery={this.addGrocery} />
                <List 
                    items={this.state.items}
                    toggle={this.toggle}
                />

                {/* //lets try a singular toggle - it worked*/}
                {/* <div onClick={()=> this.toggle(1)}>toggle 1</div> */}
            </div>
        );
    }

}

export default Groceries;