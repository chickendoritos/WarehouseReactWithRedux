import React, {Component} from 'react';
import Section from './Section';

class SectionGrid extends Component {
  render() {
    //console.log(this);
    return (
      <div className="section-grid">
        {this.props.sections.map((section, i) => <Section {...this.props} key={i} i={i} section={section} />)}
      </div>
    )
  }
}

export default SectionGrid;