import React, {useEffect, useState} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const gService = new gotService();

function RandomChar() {


    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // state = {
    //     char: {},
    //     loading: true,
    //     error: false
    // }

    useEffect(() => {
        updateChar();
        let timerID = setInterval(updateChar, 5000);
        return () => {
            clearInterval(timerID);
        }
    }, [])
    

    function onCharLoaded(char) {
        setChar(char);
        setLoading(false);
    }

    function onError(err) {
        setError(true);
        setLoading(false);
    }

    function updateChar() {
        // const id = 1321321561;
        const id = Math.floor(Math.random()*140+25);
        gService.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }


        // const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;