import React, { Component } from 'react';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {Col, Row, Button} from 'reactstrap';
import './index.css';


export default class RandomCharBtn extends Component {
    
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        console.log("error");
        this.setState({
            error: true
        })
    }

    onToggledRandomChar = () =>{
        this.setState({
            showRandomChar: !this.state.showRandomChar
        });
    }

    render() {
        const {showRandomChar} = this.state;

        const info = showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <Button
                        color="primary"
                        className="toggle-btn"
                        onClick={this.onToggledRandomChar}
                    >Toggle random Character</Button>
                    {info}
                </Col>   
            </Row>
        )
    }
}  