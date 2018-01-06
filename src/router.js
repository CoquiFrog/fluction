import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import Jukebox from './components/Jukebox.js';
import Home from './components/Home.js';
import Tetris from './components/Tetris.js';

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/jukebox' component={Jukebox}/>
        <Route path='/tetris' component={Tetris}/>


    </Switch>
)



