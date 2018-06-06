import React from 'react';
import createReactClass from 'create-react-class';
import Photo from './Photo';

const PhotoGrid = createReactClass({
  render() {
    return (
      <div className="photo-grid">
      {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default PhotoGrid;
