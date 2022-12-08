import React, {useState} from "react";

function Poem( {poem} ) {
  const [readStatus, setReadStatus] = useState(false)

  const clickButton = () => {
    setReadStatus(readStatus ? "Mark as read" : "Mark as unread")
  }

  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- {poem.author}</strong>
      </p>
      <button onClick={() => {clickButton(poem)}}>{readStatus}</button>
    </div>
  );
}

export default Poem;
