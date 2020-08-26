import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Comment from './Comment'
import { mapToJson } from '../services/Comments.service'
import { CONSTANTS } from '../constants/Constants'

function Comments() {

  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mapToJson(id).then(
      data => {
        setComments(data.kids)
        setIsLoading(false);
      }
    )
  },[id]);

  console.log(comments)
  return (
    <div className="container">
      <h6 className="pl-3 pt-3 mt-3 pb-2 mb-0">Comments</h6>
    {
      isLoading ?
      <div className="text-center pt-5 mt-5">
        { CONSTANTS.LOADING_COMMENTS }</div> :
      comments.map( (id, index) => {
        return <Comment commentID={ id } key={ index }/>
      })
    }
  </div>
  );
}

export default Comments;
