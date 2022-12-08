import React, {useEffect, useState} from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [allPoems, setAllPoems] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:8004/poems")
      let res = await req.json()
      setAllPoems(res)
    }
    request()
  },[])

  return (
    <div className="poems-container">
      {
        allPoems.map((poem) => {
          return(
            <div>
              <Poem poem={poem}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default PoemsContainer;
