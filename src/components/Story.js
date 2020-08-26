import React from 'react'
import { Link } from 'react-router-dom'

function Story({ story }) {
  return (
    <div className="media text-muted pt-3">
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <Link to="#" onClick={()=> window.open(story.url, "_blank")}
              className="text-dark d-block text-decoration-none font-weight-bold">
          { story.title }
        </Link>
        { story.score } points by { story.by } |
        <Link to={`/comments/${ story.id }`}> { story.kids ? story.kids.length : 0 } comments</Link>
      </p>
    </div>
  );
}

export default Story;
