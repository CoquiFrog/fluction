import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Tetris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityhome: 0
        }
    }
    render() {
        return (
            <div>
                <h2>This is the Tetris page</h2>

            <canvas id="tetris" width="240" height="400"></canvas>
            
           


            </div>

        )

    }



}

export default Tetris;