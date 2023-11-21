import React from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

function CardNote({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  isarchivedState,
}) {
  // console.log(id, title, body, createdAt);
  return (
    <div className="note-item">
      <CardTitle title={title} />
      <CardBody body={body} createdAt={createdAt} />
      <CardFooter
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isarchivedState={isarchivedState}
      />
    </div>
  );
}

export default CardNote;
