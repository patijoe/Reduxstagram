import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    const { posts } =  this.props;

    return (
    <div className="photo-grid">
      {posts.map((post, index) => 
        <Photo {...this.props} key={index} index={index} post={post}/>
        )}
    </div>
    )
  }
});

export default PhotoGrid;
