import { useState } from "react";

function Navbar({ selects, setSelects, search, setSearch }) {
  const changeS = (e) => {
    setSelects(e);
    console.log(e);
  };

  return (
    <div className="navbar">
      <div className="navcont">
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="select" onChange={(e) => changeS(e.target.value)}>
          <option value={"all"}>All</option>
          <option value={"male"}> Male </option>
          <option value={"female"}>Female</option>
          <option value={"n/a"}>N/A</option>
        </select>
      </div>

      <div className="info">
        <div className="name">Name</div>
        <div className="height">Height</div>
        <div className="gender">Gender</div>
        <div className="fav">Favorite Films</div>
      </div>
    </div>
  );
}

export default Navbar;
