import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityhome: 0
        }
    }
    render() {
        return (
            <div>
                <h2>This is the home page</h2>
                <Link to='/Tetris'><button className='button1'>Go to Tetris</button></Link>
                <br></br>
                <br></br>
                <br></br>
                <Link to='/Jukebox'><button className='button1'>Go to Jukebox</button></Link>


            </div>

        )

    }



}

export default Home;