import Grocery from './Grocery';
const List = (props) => {
    const renderGroceries = () => {
        return props.items.map((grocery)=>{
            
            return (
                <Grocery
                key={grocery.id}
                id={grocery.id}
                name={grocery.name}
                count={grocery.count}
                toggle={props.toggle}
                complete={grocery.complete}
                edit={props.editItem}
                />
                
            );
        });
    };
    return <ul class="list-group">{renderGroceries()}</ul>;
};

export default List;


