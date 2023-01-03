import React, { useState } from "react";
function Like() {
  let initialvalue = 0;
  const [like, setlike] = useState(initialvalue);
  const [dislike, setdislike] = useState(0);

  const handlelike = () => {
    setlike((pre) => pre + 1);
    if (dislike > 0) {
      setdislike((pre) => pre - 1);
    }
  };
  const handledislike = () => {
    setdislike((pre) => pre + 1);
    if (like > 0) {
      setlike((pre) => pre - 1);
    }
  };
  return (
    <div className="btn-like">
      <button className="likebtn" onClick={handlelike}>
        Like {like}
      </button>
      <button className="likebtn" onClick={handledislike}>
        DisLike {dislike}
      </button>
    </div>
  );
}

export default Like;
