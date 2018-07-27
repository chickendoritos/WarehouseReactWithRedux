import React, { Component } from 'react';
import Section from './Section';
import Items from './Items';

class Single extends Component {
  render() {
    console.log(this);
    const { sectionId } = this.props.params;

    const i = this.props.sections.findIndex((section) => section.code === sectionId);
    const section = this.props.sections[i];

    const postItems = this.props.items[sectionId] || [];
    console.log(postItems);
    return (
      <div className="single-photo">
        <Section i={i} section={section} {...this.props} />
        <Items postItems={postItems} {...this.props} />
      </div>
    )
  }
};

export default Single;
