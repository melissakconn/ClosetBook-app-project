import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './stylesheet.css'

import Home from './01-Home';
import MyCloset from './02-MyCloset';
import LookBook from './03-LookBook';



class MainComp extends React.Component {




    render() {
        return(
            <HashRouter>
                <div>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/1">MyCloset</Link></li>
                        <li><Link to="/2">LookBook</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/1" component={MyCloset}/>
                    <Route path="/2" component={LookBook}/>



                    <hr/>
                    <div>by: Melissa Conn</div>
                </div>
            </HashRouter>
        )
    }
}

export default MainComp;