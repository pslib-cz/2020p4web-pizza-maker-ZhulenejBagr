import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const WebRouter = (props) => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Domů</Link>
                        </li>
                        <li>
                            <Link to="/ingredients">Ingredience</Link>
                        </li>
                        <li>
                            <Link to="/order/pizza">Objednat pizzu</Link>
                        </li>
                        <li>
                            <Link to="/order/calzone">Objednat calzone</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/order/pizza">
                        <h1>pizza</h1>
                    </Route>
                    <Route path="/order/calzone">
                        <h1>calzone</h1>
                    </Route>
                    <Route path="/ingredients">
                        <h1>ingredients</h1>
                    </Route>
                    <Route path="/">
                        <h1>default</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};