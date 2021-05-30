import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from '../header'; 
import {CharacterPage, RandomCharBtn, StartPage} from '../Pages';
import {BookPage} from '../Pages';
import {HousePage} from '../Pages';
import {HouseItem} from '../Pages';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './app.css';
import { BooksItem } from '../Pages';





export default class App extends Component {    
    
    render() {        
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header/>
                        <Route path="/" exact component={StartPage}/>
                        <Route path="/start" exact component={RandomCharBtn}/>
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/houses" exact component={HousePage}/>
                        <Route path="/houses/:id" render={
                            ({match}) => {
                                const {id} = match.params;

                                return <HouseItem houseId={id}/>
                            }
                        }/>
                        <Route path="/books" exact component={BookPage}/>
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;
                                
                                return <BooksItem bookId={id}/>}
                        }/>
                    </Container>
                </div>
            </Router>
        )
    }
}
