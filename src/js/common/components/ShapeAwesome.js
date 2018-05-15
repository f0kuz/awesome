import React, { Component } from 'react';
import shapeAwesome from './../../../assets/images/shape_awesome.svg';


class ShapeAwesome extends Component {
    addRotateClass = e => {
        e.target.classList.add('awesome-shape-spin');
    }

    removeRotateClass = e => {
        e.target.classList.remove('awesome-shape-spin');
    }
    
    render() {
        return (
            <img
                src={shapeAwesome}
                className="awesome-shape"
                alt="some undefined shape"
                onClick={this.addRotateClass}
                onAnimationEnd={this.removeRotateClass}
            />
        );
    }
};

export default ShapeAwesome;
