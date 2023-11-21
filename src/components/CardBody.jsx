import React from 'react';

function CardBody({ body, createdAt }) {
  return (
    <div className="card-body">
      <p className="note-item__date">{createdAt}</p>

      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default CardBody;
