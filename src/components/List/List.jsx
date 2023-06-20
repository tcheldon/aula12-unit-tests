import ListItem from "../ListItem/ListItem"
import './List.css';

function List({items = []}) {
    const map = items.map((item) => {
        return (
            <ListItem item={item} />
        );
    })

    return (
        <div className="list-wrapper" data-testid='list'>
            <ul className="list">
                {map}
            </ul>
        </div>
    );
}

export default List;