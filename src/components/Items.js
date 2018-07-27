import React, { Component } from 'react';

class Items extends Component {
    render() {
        const props = this.props;
        function renderItem(item, i) {
            console.log(props);
            return (
                <div className="comment" key={i}>
                    <p>
                        <button className="remove-comment" onClick={props.removeItem.bind(null, props.params.sectionId, i)}>&times;</button>
                        <strong>{item.name}</strong><br />
                        {item.description}<br />
                        Quantity: {item.count}
                    </p>
                </div>
            )
        };
        return (
            <div className="comments">
                {this.props.postItems.map(renderItem)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="name" placeholder="name" />
                    <input type="text" ref="description" placeholder="description" />
                    <input type="text" ref="count" placeholder="count" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
};

export default Items;
