import React, {useEffect, useState} from 'react';
import './itemList.css';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

function ItemList({getData, renderItem, onItemSelected}) {

    const [itemList, updateList] = useState([]);
    const [error, setError] = useState(false);

    // state = {
    //     itemList: null,
    //     error: false
    // }


    useEffect(() => {
        getData()
        .then((data) => {
            updateList(data);
            setError(false);
        })
        .catch(() => onError());
    },[])

    // componentDidCatch() {
    //     this.setState({
    //         itemList: null,
    //         error: true,
    //     })
    // }

    function onError(status) {
        updateList(null);
        setError(true);
    }

    function renderItems(arr) {
        return arr.map((item) => {

            const {id} = item;
            const label = renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item item-hover"
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

        if(error) {
            return <ErrorMessage/>
        }

        if(!itemList) {
            return <Spinner/>
        }

        const items = renderItems(itemList);
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
}

export default ItemList;