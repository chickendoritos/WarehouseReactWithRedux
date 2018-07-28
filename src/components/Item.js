import React, { Component } from 'react';
import '../App.css';


class Item extends Component {
    handleChange = (e) => {
        e.preventDefault();
        //console.log(this.props);
        // const { sectionId } = this.props.params;
        // const name = this.refs.name.value;
        // const description = this.refs.description.value;
        // const count = this.refs.count.value;
        const updatedItem = {
            ...this.props.postItems[this.props.i],
            [e.currentTarget.name]: e.currentTarget.value
        };

        this.props.updateItem(this.props.params.sectionId, this.props.i, updatedItem.name, updatedItem.description, updatedItem.count);
    };
    render() {
        return (
            <div className="box item">
                <div className="fields">
                    <span className="itemLabel">Name</span> 
                    <input type="text" name="name" placeholder="name" value={this.props.item.name} onChange={this.handleChange} />
                    <span className="itemLabel">Description</span>
                    <textarea name="description" placeholder="description" value={this.props.item.description} onChange={this.handleChange} /><br />
                    <span className="itemLabel">Quantity</span>
                    <input type="number" name="count" placeholder="count" value={this.props.item.count} onChange={this.handleChange} />
                    <br />
                    <button className="remove-item" onClick={this.props.removeItem.bind(null, this.props.params.sectionId, this.props.i)}>&times; Delete</button>
                </div>
            </div>
        )
    }
}

export default Item;