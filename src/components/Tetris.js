import React, { Component } from 'react';
// import { Link } from 'react-router-dom';




class Tetris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityhome: 0
        }
    }
    render() {
        return (
            <div className="tetrisStyle">
            <div>
                <h2>This is the Tetris page</h2>
            <div>Score : <span id="score"></span></div>
            <canvas id="tetris" className="tetrisCanvas" width="240" height="400"></canvas>
            
           </div>


            </div>

        )

    }



}

export default Tetris;