import React, {useEffect, useState} from 'react';

import { CONSTANTS } from '../constants/Constants'
import { mapToJson } from "../services/Comments.service";

function Comment({ commentID }) {

  const [show, setShow] = useState("show");
  const toggleShow = () => show ? setShow("") : setShow("show");

  const [comment, setComment] = useState();

  useEffect(()=>{
    mapToJson(commentID).then((data)=>{
      setComment(data)
    })
  },[commentID]);

  const nestedComments = ((comment && comment.kids) || []).map((id, index) => {
    return <Comment  commentID={ id } key={ index }/>
  });

  const createMarkup = () => {
    return {__html: comment?.text}
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between" id="headingOne">
        { comment?.by }
        <span onClick={ toggleShow } className={ `arrow ${ show ? "" : CONSTANTS.ARROW_DOWN}`}>
        </span>
      </div>
      <div id="collapseOne" className={`collapse ${show}`} aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body" id="child1">
          <div dangerouslySetInnerHTML={createMarkup()} className=""></div>
          { nestedComments }
        </div>
      </div>
    </div>
  );
}

export default Comment;
