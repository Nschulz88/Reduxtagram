import React from 'react';
import createReactClass from 'create-react-class';
import Photo from './Photo';
// import comments 


const Single = createReactClass({
  render() {
    // index of the post 
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    console.log(i);
    const post = this.props.posts[i];
    console.log( 'Logging post', post);
    // get us the post 

    return (
      <div className="single-photo">
      
      </div>
    )
  }
});

export default Single;
