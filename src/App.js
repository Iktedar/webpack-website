import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Routes,
} from 'react-router-dom';

import { Home } from './components/Home';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;