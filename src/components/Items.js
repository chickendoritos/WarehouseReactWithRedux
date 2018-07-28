import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
    render() {
        return (
            <div className="comments">
                {this.props.postItems.map((item, i) => <Item {...this.props} key={i} i={i} item={item} />)}
            </div>
        )
    }
};

export default Items;
