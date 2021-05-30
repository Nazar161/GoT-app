import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

class HousePage extends Component {
 
    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        console.log("error");
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <div className="divItemList">
                <div>
                    <h1>Houses</h1>
                </div>
                <ItemList
                    onItemSelected={(itemId) => {
                        this.props.history.push(itemId);
                    }}
                    getData={this.gotService.getAllHouses}
                    renderItem={({name}) => name }
                />
            </div>
        );
        
    }
}

export default withRouter(HousePage);