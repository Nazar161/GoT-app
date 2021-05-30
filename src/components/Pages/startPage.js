import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';


export default class StartPage extends Component {

    state = {
        started: false
    }

    onStarted = () => {
        this.setState({
            started: true
        })
    }


    render() {
        let startBtnClassNames = "startBtn"
        let btnsClassNames = "btns";

        if(this.state.started) {
            btnsClassNames += ' started';
            startBtnClassNames += ' started';
        }

        return(
            <div>
                <div className="welcome">
                    <h1>
                        Welcome To Game of Thrones DB
                    </h1>
                </div>
                <div className={startBtnClassNames}>
                        <button onClick={this.onStarted}>
                            <span>Get Started</span>
                        </button>
                </div>

                
                <div className="btns-par">
                    <Link to="/characters/">
                        <div className={btnsClassNames}>
                            <span>About Characters</span>
                        </div>
                    </Link>
                    <Link to="/houses/">
                        <div className={btnsClassNames}>
                            <span>About Houses</span>
                        </div>
                    </Link>
                    <Link to="/books/">
                        <div className={btnsClassNames}>
                            <span>About Books</span>
                        </div>
                    </Link>
                </div>
                

            </div>
        )
    }
}

