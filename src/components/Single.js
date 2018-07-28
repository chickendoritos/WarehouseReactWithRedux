import React, { Component } from 'react';
import Section from './Section';
import Items from './Items';

class Single extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this);
    const { sectionId } = this.props.params;
    const name = this.refs.name.value;
    const description = this.refs.description.value;
    const count = this.refs.count.value;
    this.props.addItem(sectionId, name, description, count);
    this.refs.itemForm.reset();
  };
  render() {
    //console.log(this);
    const { sectionId } = this.props.params;

    const i = this.props.sections.findIndex((section) => section.code === sectionId);
    const section = this.props.sections[i];

    const postItems = this.props.items[sectionId] || [];
    //console.log(postItems);
    return (
      <div className="single-photo">
        <Section i={i} section={section} {...this.props} />
        <Items postItems={postItems} {...this.props} />
        <form ref="itemForm" className="item-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="name"/>
          <input type="text" ref="description" placeholder="description"/>
          <input type="number" ref="count" placeholder="count"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
};

export default Single;
