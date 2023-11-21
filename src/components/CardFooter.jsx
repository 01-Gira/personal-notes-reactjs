import React from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchived';

function CardFooter({ id, onDelete, onArchive, isarchivedState }) {
  return (
    <div className="note-item__action">
      <ButtonDelete id={id} onDelete={onDelete} />
      {!isarchivedState && <ButtonArchive id={id} onArchive={onArchive} />}
    </div>
  );
}

export default CardFooter;
