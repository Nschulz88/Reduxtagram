import React from 'react'
import { Link } from 'react-router';
import createReactClass from 'create-react-class';


const Main = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
