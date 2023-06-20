import { AppContext } from '../../context';
import { useContext } from 'react';
import Heart from '../Heart/Heart';
import './ListItem.css';

function ListItem ({item}) {
    const appContext = useContext(AppContext);

    const { name, sprites } = item;
    const sprite = sprites.other["official-artwork"].front_default;

    const isFavorite = appContext.favorites?.includes(item.id) || false;

    const handleClick = () => {
        console.log('clicked')
        if (isFavorite) {
            appContext.remove(item);
        } else {
            appContext.add(item);
        }
    }

    return (
        <li className="list-item" data-testid={`list-item-${item.id}`}>
            <div className="list-item-image-wrapper">
                <img className="list-item-image" src={sprite} alt="Pokemon" />
            </div>
            <p>{name}</p>
            <div className='list-item-heart-wrapper'>
                <Heart onClick={handleClick} selected={isFavorite}/>
            </div>
        </li>
    )
}

export default ListItem; 