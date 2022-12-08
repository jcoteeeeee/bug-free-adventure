import React from "react";

function NewPoemForm() {
  
  const addPoem = (poem) => {
    const request = async (poem) => {
      let req = await fetch("http://localhost:8004/poems", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({"title" : "", "author" : "", "description" : ""})
      })

    }
  }
  return (
    <form className="new-poem-form">
      <input placeholder="Title" />
      <input placeholder="Author" />
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" onClick={() => {addPoem(poem)}}/>
    </form>
  );
}

export default NewPoemForm;
