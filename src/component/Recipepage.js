import React, { useState } from "react";
import Recipecard from "./Recipecard";
const Recipepage = () => {
  const [data, setDta] = useState();
  const [search, Setsearch] = useState("");
  const [msg,setMsg]=useState()

  const handleSearch = (e) => {
    Setsearch(e.target.value);
  };
  const myApi = async () => {
    if(search ===""){
        setMsg("Please Enter the text")
    }else{
        const get = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
          );
          const jsondata = await get.json();
          // console.log(jsondata.meals);
          setDta(jsondata.meals);
          setMsg("")
        };
    }
    // useEffect(() => {
    //     if (search.trim() !== "") {
    //       myApi(); // Trigger the API call whenever `search` changes
    //     }
    //   }, [search]);
   
  return (<>
  <h1 className="head">Food Recipe App</h1>
    <div className="container">
      <div className="searchBar">
        <input type="text" placeholder="Enter Dishe" onChange={handleSearch} />
        <button onClick={myApi}>Searching</button>
      </div>
      <div>
        <Recipecard details={data} />
      </div>
      <h3 className="error">{msg}</h3>
    </div>
    </>
  );
};

export default Recipepage;
