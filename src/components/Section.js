import React, { Component } from 'react';
import { Link } from 'react-router';
//import CSSTransitionGroup from 'react-addons-css-transition-group';

class Section extends Component {
  render() {
    const { section, i, items } = this.props;
    //console.log(this.props);
    //console.log(items[section.code].length);
    return (
      <figure className="box sectionBox">
        <div>
          <h2 className="sectionTitle">
            <Link to={`/view/${section.code}`}>
              {section.name}
            </Link>
          </h2>
          {section.types}
        </div>
 
        <figcaption>
          <p>{items[section.code] ? items[section.code].length : 0} Items</p>
        </figcaption>

      </figure>
    )
  }
}

export default Section;
