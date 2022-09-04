import React from "react";

export default function LikeAndComment() {
  return (
    <small className="text-muted text-center">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <span className="material-icons">thumb_up</span>Нравится
        </div>

        <div className="col d-flex justify-content-center">
          <span className="material-icons">add_comment</span>
          Комментировать
        </div>
      </div>
    </small>
  );
}
